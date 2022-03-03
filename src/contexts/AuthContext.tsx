import { createContext, ReactNode } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { setCookie, destroyCookie } from "nookies";
import Router from "next/router";

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>;
  logout: () => Promise<void>
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

  async function logout() {
    signOut(auth)
      .then(() => {
        console.log(auth.currentUser);
        destroyCookie(null, "market.token");
        Router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
