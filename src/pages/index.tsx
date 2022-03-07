import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthContext";
import Link from "next/link";

import { Container, Content, Form, Input } from "../styles/pages/login";

type FormData = {
  email: string;
  password: string;
};

const Login: NextPage = () => {
  const { signIn } = useContext(AuthContext);

  const { register, handleSubmit } = useForm<FormData>();

  async function handleLogin(data: FormData) {
    try {
      await signIn(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Market</title>
      </Head>
      <Container>
        <Content>
          <h1>Entre no sistema</h1>
          <Form onSubmit={handleSubmit(handleLogin)}>
            <Input
              placeholder="Email"
              type="text"
              {...register("email", { required: true})}
            />
            <Input
              placeholder="Senha"
              type="password"
              {...register("password", { required: true})}
            />
            <button type="submit">Entrar</button>
          </Form>
          <Link href="/signin">Criar conta</Link>
        </Content>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "market.token": token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default Login;
