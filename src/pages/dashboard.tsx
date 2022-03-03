import React from "react";
import type { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Layout from "../components/Layout";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
  
};

const labels = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Vendas",
      data: labels.map(() => Math.random() * (120 - 0) + 0),
      backgroundColor: "green",
    },
  ],
};
const Dashboard = () => {
  return (
    <Layout>
      <Bar options={options} data={data} />
    </Layout>
  );
};

export default Dashboard;

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
