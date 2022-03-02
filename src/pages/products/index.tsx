import type { GetServerSideProps } from "next";
import Link from "next/link";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useQuery } from "react-query";

import Layout from "../../components/Layout";

import { Container, Icon, Table } from "../../styles/pages/products";

type ProductProps = {
  name: string;
  price: string;
  quantity: string;
};

const Products = ({ data }) => {
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
            {data?.map((item) => {
              return (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>R$ {item.price}</td>
                  <td>{item.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const db = getFirestore();
  let data: ProductProps[] = [];
  async function getDatas() {
    const query = await getDocs(collection(db, "products"));
    query.forEach((doc) => {
      data.push(doc.data() as ProductProps);
    });
    return data;
  }
  data.push(JSON.stringify(await getDatas()))
  data.pop()
  return {
    props: { data },
  };
};

export default Products;
