import { Form, FormControl } from "./styles";

function FormProduct() {
  return (
    <Form>
      <FormControl>
        <input type="text" placeholder="Nome do produto" />
        <input type="number" placeholder="Quantidade" />
      </FormControl>
      <FormControl>
        <input type="text" placeholder="Preço" />
      </FormControl>
      <FormControl>
        <button>Salvar</button>
      </FormControl>
    </Form>
  );
}

export default FormProduct;
