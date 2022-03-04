import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import Layout from "../components/Layout";

import { Container, Table } from "../styles/pages/orders";

const Config = () => {
  return (
    <>
      <Head>
        <title>Pedidos</title>
      </Head>
      <Layout>
        <Container>
          <h1>Pedidos</h1>
          <Table>
            <thead>
              <tr>
                <th>Nº do pedido</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "market.token": token } = parseCookies(ctx);
  
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {}
  }
};


export default Config;
