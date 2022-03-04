import { createContext, ReactNode } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { setCookie, destroyCookie } from "nookies";
import Router from "next/router";

type Company = {
  email: string;
};

type AuthContextType = {
  signIn: (data: SignInData) => Promise<void>;
  logout: () => Promise<void>;
  dataCompany: (data: Company) => void;
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

  async function dataCompany({ email }: Company) {
    const db = getFirestore();
    const companyRef = collection(db, "companys");
    const q = query(companyRef, where("email", "==", email));
    const result = await getDocs(q);
    result.forEach((doc) => {
      setCookie(undefined, "market.email", doc.data().email, {
        maxAge: 60 * 60, // 1 HOUR
      });
    });
  }

  return (
    <AuthContext.Provider value={{ signIn, logout, dataCompany }}>
      {children}
    </AuthContext.Provider>
  );
}
