import type { NextPage } from "next";
import { Container, Content, Input } from "../styles/pages/login";

const Login: NextPage = () => {
  return (
    <Container>
      <Content>
        <h1>Entre no sistema</h1>
        <Input placeholder="Email" type="text" />
        <Input placeholder="Senha" type="password" />
        <button type="submit">Entrar</button>
      </Content>
    </Container>
  );
};

export default Login;
