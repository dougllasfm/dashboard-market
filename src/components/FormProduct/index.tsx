import axios from "axios";
import Router from "next/router";
import { parseCookies } from "nookies";
import { useForm } from "react-hook-form";
import { Form, FormControl, Input } from "./styles";

type FormData = {
  name: string
  quantity: number
  price: string
  weight: string
  category: string
  description: string
  companyId: number
}

function FormProduct() {
  const { register, handleSubmit } = useForm<FormData>();
  
  
  async function submitForm(data: FormData) {
    try {
      const { "company.token": token } = parseCookies();
      data.quantity = parseInt(data.quantity as unknown as string)
      data.companyId = parseInt(token)
      await axios.post("http://localhost:3060/createProduct", data)
      Router.push("/products")
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }

  return (
    <Form>
      <FormControl>
        <Input
          small={false}
          type="text"
          placeholder="Nome do produto"
          {...register("name")}
        />
        <Input
          small
          type="number"
          placeholder="Quantidade"
          min={0}
          {...register("quantity")}
        />
      </FormControl>
      <FormControl>
        <Input
          small
          type="text"
          placeholder="Preço"
          {...register("price")}
        />
        <Input
          small
          type="text"
          placeholder="Peso"
          {...register("weight")}
        />
        <Input
          small={false}
          type="text"
          placeholder="Categoria"
          {...register("category")}
        />
      </FormControl>
      <FormControl>
        <textarea
          placeholder="Descrição do produto"
          rows={4}
          {...register("description")}
        />
      </FormControl>
      <FormControl>
        <button onClick={handleSubmit(submitForm)} >Salvar</button>
      </FormControl>
    </Form>
  );
}

export default FormProduct;
