import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useQuery } from "react-query";

import { Container, Icon, Table } from "./styles";

type ProductProps = {
  name: string;
  price: string;
  quantity: string;
};

function Products() {
  const db = getFirestore();
  const { data } = useQuery<ProductProps[]>(
    "product",
    async () => {
      let array: ProductProps[] = [];
      const query = await getDocs(collection(db, "products"));
      query.forEach((doc) => {
        array.push(doc.data() as ProductProps);
      });
      return array;
    },
    {
      staleTime: 60 * 60 * 60, // 1 minute
    }
  );

  return (
    <Container>
      <h1>Produtos</h1>
      <Link href="/products/newProduct">
        <button>
          <Icon />
          Adicionar novo produto
        </button>
      </Link>
      <Table>
        <tr>
          <th>Nome</th>
          <th>Preço</th>
          <th>Quantidade</th>
        </tr>
        {data?.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>R$ {item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          );
        })}
      </Table>
    </Container>
  );
}

export default Products;
