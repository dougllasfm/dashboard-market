import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import { useQuery } from "react-query";
import Layout from "../components/Layout";
import { Container, Table } from "../styles/pages/orders";

type Order = {
  quantity: number;
  orderId: number
  price: string
}

const Orders = () => {
  const { data } = useQuery<Order[]>('order', async () => {
    const response = await axios.get("http://localhost:3060/orders");
    return response.data;
  }, {
    staleTime: 1000 * 60, // 1 minute
  })

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
              {data?.map((element) => {
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

export default Orders;
