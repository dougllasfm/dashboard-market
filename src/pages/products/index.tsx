import axios from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { parseCookies } from "nookies";
import { useQuery } from "react-query";
import Layout from "../../components/Layout";
import { Container, Icon, Table } from "../../styles/pages/products";

type ProductProps = {
  id: number;
  name: string;
  price: string;
  quantity: string;
};

const Products = () => {
  const { data } = useQuery<ProductProps[]>(
    "products",
    async () => {
      const response = await axios.get("http://localhost:3060/products");
      return response.data;
    },
    {
      staleTime: 1000 * 30, // 30 seconds
    }
  );

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
            {data?.map((element: ProductProps) => {
              return (
                <tr key={element.id}>
                  <td>{element.name}</td>
                  <td>{element.price}</td>
                  <td>{element.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </Layout>
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

export default Products;
