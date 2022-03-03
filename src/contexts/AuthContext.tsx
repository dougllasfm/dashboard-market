import { createContext, ReactNode, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { setCookie, destroyCookie } from "nookies";
import Router from "next/router";

type Company = {
  nameCompany: string
  addressCompany: string
}

type AuthContextType = {
  signIn: (data: SignInData) => Promise<void>;
  logout: () => Promise<void>
  companyData: (data: Company) => Promise<void>
  company: Company | undefined
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
  const [company, setCompany] = useState<Company>()

  const auth = getAuth();
  async function signIn({ email, password }: SignInData) {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCookie(undefined, "market.token", user.accessToken, {
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
        console.log(auth.currentUser);
        destroyCookie(null, "market.token");
        Router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function companyData({ nameCompany, addressCompany} : Company) {
    setCompany({nameCompany, addressCompany})
  }

  return (
    <AuthContext.Provider value={{ signIn, logout, company, companyData }}>
      {children}
    </AuthContext.Provider>
  );
}
