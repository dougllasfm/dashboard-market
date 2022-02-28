import type { NextPage } from "next";
import Layout from "../../components/Layout"
import FormProduct from "../../components/FormProduct"

const newProduct: NextPage = () => {
  return (
    <Layout>
      <h1>Adicionar novo produto</h1>
      <FormProduct />
    </Layout>
  );
};

export default newProduct;
