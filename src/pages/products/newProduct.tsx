import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import FormProduct from "../../components/FormProduct";
import Layout from "../../components/Layout";

const newProduct: NextPage = () => {
  return (
    <Layout>
      <h1>Adicionar novo produto</h1>
      <FormProduct />
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

export default newProduct;
