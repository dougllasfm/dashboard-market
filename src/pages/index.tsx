import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { parseCookies, setCookie } from "nookies";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Content,
  Form,
  Input,
  Notification
} from "../styles/pages/login";

type FormData = {
  email: string;
  password: string;
};

const Login: NextPage = () => {
  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  async function handleLogin(data: FormData) {
    try {
      setErrorLogin(false);
      const company = await axios.post(
        "http://localhost:3060/authenticate",
        data
      );
      if (company.data.token) {
        setCookie(undefined, "market.token", company.data.token);
        setCookie(
          undefined,
          "company.token",
          company.data.companyAlreadyExists.id
        );
        Router.push("/dashboard");
      }
    } catch (error) {
      setErrorLogin(true);
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
              {...register("email", { required: true })}
            />
            {errors.email && <span>Email é obrigatório</span>}
            <Input
              placeholder="Senha"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && <span>Senha obrigatória</span>}
            <button type="submit">Entrar</button>
          </Form>
          <Link href="/signin">Criar conta</Link>
        </Content>
        {errorLogin && (
          <Notification>
            <p>Nome de usuário ou senha incorretos!</p>
          </Notification>
        )}
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
