import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/Layout"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>
      <Layout>
        <h1>Ínicio</h1>
      </Layout>
    </>
  );
};

export default Home;
