import { useForm } from "react-hook-form";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setCookie } from "nookies";
import Router from "next/router";
import Link from "next/link";

import { Container, Content, Input } from "../styles/pages/signin";

type FormData = {
  email: string;
  password: string;
  nameCompany: string;
  addressCompany: string;
  keyAcess: string;
};

const signin = () => {
  const { register, handleSubmit } = useForm<FormData>();

  async function handleSignIn(data: FormData) {
    try {
      const db = getFirestore();
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          setCookie(undefined, "market.token", user.uid, {
            maxAge: 60 * 60, // 1 HOUR
          });
          await setDoc(doc(db, "Companys", data.email, "datasCompany", "Company"), {
            email: data.email,
            nameCompany: data.nameCompany,
            addressCompany: data.addressCompany,
          });
          setCookie(undefined, "market.email", data.email, {
            maxAge: 60 * 60, // 1 HOUR
          });
          Router.push("/dashboard");
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }

  return (
    <Container>
      <Content>
        <h1>Criar conta da empresa</h1>
        <Input
          placeholder="Email"
          type="text"
          {...register("email", { required: true })}
        />
        <Input
          placeholder="Senha"
          type="password"
          {...register("password", { required: true })}
        />
        <Input
          placeholder="Nome da empresa"
          type="text"
          {...register("nameCompany", { required: true })}
        />
        <Input
          placeholder="Endereço"
          type="text"
          {...register("addressCompany", { required: true })}
        />
        <Input
          placeholder="Chave de acesso fornecida"
          type="text"
          {...register("keyAcess", { required: true })}
        />
        <button onClick={handleSubmit(handleSignIn)}>Criar conta</button>
        <Link href="/">Já tenho uma conta</Link>
      </Content>
    </Container>
  );
};

export default signin;
