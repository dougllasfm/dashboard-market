import Link from "next/link";
import { Container, Icon, Table } from "./styles";

function Products() {
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
        <tr>
          <td>Arroz</td>
          <td>R$ 30,00</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Feijão</td>
          <td>R$ 30,00</td>
          <td>12</td>
        </tr>
        <tr>
          <td>Tomate</td>
          <td>R$ 30,00</td>
          <td>40</td>
        </tr>
      </Table>
    </Container>
  );
}

export default Products;
