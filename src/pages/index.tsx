import type { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthContext";

import { Container, Content, Input } from "../styles/pages/login";

type FormData = {
  email: string;
  password: string;
};

const Login: NextPage = () => {
  const { signIn } = useContext(AuthContext);

  const { register, handleSubmit } = useForm<FormData>();

  function handleLogin(data: FormData) {
    signIn(data);
  }

  return (
    <>
      <Head>
        <title>Market</title>
      </Head>
      <Container>
        <Content>
          <h1>Entre no sistema</h1>
          <Input placeholder="Email" type="text" {...register("email")} />
          <Input
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          <button onClick={handleSubmit(handleLogin)}>Entrar</button>
        </Content>
      </Container>
    </>
  );
};

export default Login;
