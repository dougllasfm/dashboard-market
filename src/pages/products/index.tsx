import type { NextPage } from "next";
import Layout from "../../components/Layout";
import Products from "../../components/Products";

const Index: NextPage = () => {
  return (
    <Layout>
      <Products />
    </Layout>
  );
};

export default Index;
