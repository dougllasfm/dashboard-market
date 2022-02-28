import type { NextPage } from "next";
import ConfigCompany from "../components/ConfigCompany";
import Layout from "../components/Layout";

const Config: NextPage = () => {
  return (
    <Layout>
      <h1>Configurações</h1>
      <ConfigCompany />
    </Layout>
  );
};

export default Config;
