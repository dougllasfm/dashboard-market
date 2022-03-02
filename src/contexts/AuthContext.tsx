import { createContext, ReactNode, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>
};

type AuthContextProviderProps = {
  children: ReactNode;
};

type SignInData = {
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthContextProviderProps) {
  const auth = getAuth();
  const isAuthenticated = false;

  async function signIn({ email, password }: SignInData) {
    console.log("function")
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCookie(undefined, "market.token", user.accessToken, {
          maxAge: 60 * 60, // 1 HOUR
        });

        Router.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
