"use client";
import { clientSessionToken } from "@/lib/http";
import { AccountResType } from "@/schemaValidations/account.schema";
import { createContext, useContext, useState } from "react";

// const AppContext = createContext({
//   sessionToken: "",
// });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const AppContext = createContext({
// sessionToken: string;
// setSessionToken: (token: string) => void;
// })

// export const useAppContext = () => {
//   const context = useContext(AppContext);
//   if (!context) {
//     throw new Error("useAppContext must be used within an APpProvider");
//   }
//   return context;
// };

type User = AccountResType["data"];

const AppContext = createContext<{
  user: User | null;
  setUser: (user: User | null) => void;
}>({
  user: null,
  setUser: () => {},
});

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export default function AppProvider({
  children,
  initialSessionToken = "",
  user: userProp,
}: {
  children: React.ReactNode;
  initialSessionToken?: string;
  user: User | null;
}) {
  const [user, setUser] = useState<User | null>(userProp);
  useState(() => {
    clientSessionToken.value = initialSessionToken;
  });
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}
