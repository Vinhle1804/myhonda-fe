// import { decodeJWT } from "@/lib/utils"

// type PayloadJWT = {
//   iat: number
//   exp: number
//   tokenType: string
//   userID: number
// }

export async function POST(request: Request) {
    const body = await request.json();
    const sessionToken = body.sessionToken as string;
    const expiresAt = body.expiresAt as string
  
  
    if (!sessionToken) {
      return Response.json(
        { message: "kh nhận đc token" },
        {
          status: 400,
        }
      );
    }
  
    // dùng expriseAt thì k cần lấy payload jwt nữa
    //lấy payload của sessionToken
  // const payload = decodeJWT<PayloadJWT>(sessionToken)
  const expiresDate = new Date(expiresAt).toUTCString()
  
  
    return Response.json(body, {
      status: 200,
      headers: {
        "Set-Cookie":`sessionToken=${sessionToken} ; Path=/; HttpOnly; Expires=${expiresDate}; SameSite=Lax; Secure  `,
      },
    });
  }
  