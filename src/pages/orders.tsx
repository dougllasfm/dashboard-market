import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import Layout from "../components/Layout";

import { Container, Table } from "../styles/pages/orders";

const Orders = ({ data }) => {
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
                <th>Preço total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((element) => {
                return (
                  <tr key={element.orderId}>
                    <td>{element.orderId}</td>
                    <td>{element.quantity} produtos</td>
                    <td>R$ {element.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("http://localhost:3060/orders");
  return {
    props: { data: res.data },
  };
};

export default Orders;
