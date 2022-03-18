import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { Container, Content, Input } from "../styles/pages/signin";

type FormData = {
  email: string;
  password: string;
  name: string;
  address: string;
  taxMinimum: string;
  buyMinimum: string;
  hourOpen: string;
  hourClosed: string;
};

const signin = () => {
  const { register, handleSubmit } = useForm<FormData>();

  async function handleSignIn(data: FormData) {
    try {
      console.log("aqui")
      const res = await axios.post("http://localhost:3060/createCompany", data);
      Router.push("/");
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
          {...register("name", { required: true })}
        />
        <Input
          placeholder="Endereço"
          type="text"
          {...register("address", { required: true })}
        />
        <Input
          placeholder="Taxa minima"
          type="text"
          {...register("taxMinimum", { required: true })}
        />
        <Input
          placeholder="Compra minima"
          type="text"
          {...register("buyMinimum", { required: true })}
        />
        <Input
          placeholder="Hora que abre"
          type="text"
          {...register("hourOpen", { required: true })}
        />
        <Input
          placeholder="Hora que fecha"
          type="text"
          {...register("hourClosed", { required: true })}
        />
        <button onClick={handleSubmit(handleSignIn)}>Criar conta</button>
        <Link href="/">Já tenho uma conta</Link>
      </Content>
    </Container>
  );
};

export default signin;
