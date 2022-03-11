import type { GetServerSideProps } from "next";
import Link from "next/link";

import Layout from "../../components/Layout";

import { Container, Icon, Table } from "../../styles/pages/products";
import { parseCookies } from "nookies";
import axios from "axios";

type ProductProps = {
  id: number
  name: string;
  price: string;
  quantity: string;
};

const Products = ({data}) => {
  return (
    <Layout>
      <Container>
        <h1>Produtos</h1>
        <Link href="/products/newProduct">
          <button>
            <Icon />
            Adicionar novo produto
          </button>
        </Link>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element: ProductProps) => {
              return (
                <tr key={element.id}>
                  <td>{element.name}</td>
                  <td>{element.price}</td>
                  <td>{element.quantity}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await axios.get("http://localhost:3060/products")
  return {
    props: { data: res.data },
  };
};

export default Products;
