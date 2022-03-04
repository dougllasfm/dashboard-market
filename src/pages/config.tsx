import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
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
