import envConfig from "@/config";
import { LoginResType } from "@/schemaValidations/auth.schema";
import { normalizePath } from "./utils";
import { redirect } from "next/navigation";



type CustomOptions = Omit<RequestInit, "method"> & {
  baseUrl?: string | undefined;
};

const ENTITY_ERRROR_STATUS = 422;
const AUTHENTICATION_ERROR_STATUS = 401;

type EntityErrorPayload = {
  message: string;
  errors: {
    field: string;
    message: string;
  }[];
};

export class HttpError extends Error {
  status: number;

  payload: {
    message: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor({ status, payload }: { status: number; payload: any }) {
    super("HttpError");
    this.status = status;
    this.payload = payload;
  }
}

export class EntityError extends HttpError {
  status: 422;
  payload: EntityErrorPayload;
  constructor({
    status,
    payload,
  }: {
    status: 422;
    payload: EntityErrorPayload;
  }) {
    super({
      status: status,
      payload,
    });
    this.status = status;
    this.payload = payload;
  }
}

class SessionToken {
  private token = ""
  private _expiresAt = new Date().toISOString()
  get value() {
    return this.token;
  }
  set value(token: string) {
    //gọi ở server thì bị lỗi ok?
    if (typeof window === undefined) {
      throw new Error("Cannot set token on server side");
    }
    this.token = token;
  }
get expiresAt(){
  return this._expiresAt
}
set expiresAt(expiresAt: string){
      //gọi ở server thì bị lỗi ok?
      if (typeof window === undefined) {
        throw new Error("Cannot set token on server side");
      }
      this._expiresAt= expiresAt
}

}


export const clientSessionToken = new SessionToken();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let clientLogoutRequest: null | Promise<any> = null;
export const isClient = () => typeof window !== "undefined";

const request = async <Response>(
  method: "GET" | "PUT" | "POST" | "DELETE",
  url: string,
  options?: CustomOptions | undefined
) => {
  let body = options?.body
  const baseHeaders: Record<string, string> = {
    Authorization: clientSessionToken.value
      ? `Bearer ${clientSessionToken.value}`
      : "",
  };

  // Nếu body không phải FormData, chuyển thành JSON và đặt Content-Type
  if (body && !(body instanceof FormData)) {
    body = JSON.stringify(body);
    baseHeaders["Content-Type"] = "application/json";
  }

  const baseUrl =
    options?.baseUrl === undefined
      ? envConfig.NEXT_PUBLIC_API_ENDPOINT
      : options.baseUrl;

  const fullUrl = url.startsWith("/") ? `${baseUrl}${url}` : `${baseUrl}/${url}`;

  const res = await fetch(fullUrl, {
    ...options,
    headers: {
      ...baseHeaders,
      ...options?.headers,
    },
    body,
    method,
  });

  const payload: Response = await res.json();
  const data = { status: res.status, payload };

  if (!res.ok) {
    if (res.status === ENTITY_ERRROR_STATUS) {
      throw new EntityError(data as { status: 422; payload: EntityErrorPayload });
    } else if (res.status === AUTHENTICATION_ERROR_STATUS) {
      if (typeof window !== "undefined") {
        if (!clientLogoutRequest) {
          await fetch("/api/auth/logout", {
            method: "POST",
            body: JSON.stringify({ force: true }),
            headers: { ...baseHeaders },
          });
          await clientLogoutRequest;
          clientSessionToken.value = "";
          clientSessionToken.expiresAt = new Date().toISOString();
          clientLogoutRequest = null;
        }
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const sessionToken = (options?.headers as any)?.Authorization?.split("Bearer ")[1];
        redirect(`/logout?sessionToken=${sessionToken}`);
      }
    } else {
      throw new HttpError(data);
    }
  }

  if (isClient()) {
    if (["auth/login", "auth/register"].some((item) => item === normalizePath(url))) {
      clientSessionToken.value = (payload as LoginResType).data.token;
      clientSessionToken.expiresAt = (payload as LoginResType).data.expiresAt;
    } else if ("auth/logout" === normalizePath(url)) {
      clientSessionToken.value = "";
      clientSessionToken.expiresAt = new Date().toISOString();
    }
  }

  return data;
};


const http = {
  get<Response>(
    url: string,
    options?: Omit<CustomOptions, "body"> | undefined
  ) {
    return request<Response>("GET", url, options);
  },
  post<Response>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: any,
    options?: Omit<CustomOptions, "body"> | undefined
  ) {
    return request<Response>("POST", url, { ...options, body });
  },
  put<Response>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: any,
    options?: Omit<CustomOptions, "body"> | undefined
  ) {
    return request<Response>("PUT", url, { ...options, body });
  },
  delete<Response>(
    url: string,
    options?: Omit<CustomOptions, "body"> | undefined
  ) {
    return request<Response>("DELETE", url, { ...options });
  },
};

export default http;
