import { createContext, ReactNode } from "react";
import { setCookie, destroyCookie } from "nookies";
import Router from "next/router";

type AuthContextType = {
  signIn: (data: SignInData) => Promise<void>;
  logout: () => Promise<void>;
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

  async function signIn({ email, password }: SignInData) {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCookie(undefined, "market.token", user.uid, {
          maxAge: 60 * 60, // 1 HOUR
        });
        setCookie(undefined, "market.email", email, {
          maxAge: 60 * 60, // 1 HOUR
        });

        Router.push("/dashboard");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  async function logout() {
    signOut(auth)
      .then(() => {
        destroyCookie(null, "market.token");
        destroyCookie(null, "market.email")
        Router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <AuthContext.Provider value={{ signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
