import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import Layout from "../components/Layout";

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <h1>Ínicio</h1>
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
    props: {},
  };
};

export default Dashboard;
