import Router from "next/router";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { Form, FormControl, Input } from "./styles";
import { parseCookies } from "nookies";

type FormData = {
  nameProduct: string
  quantity: string
  price: string
  weight: string
  description: string
}

function FormProduct() {
  const { register, handleSubmit } = useForm<FormData>();
  
  
  async function submitForm(data: FormData) {
    try {
      const { "market.email": token } = parseCookies();
      const db = getFirestore();
      await setDoc(doc(db, "Companys", token, "products", data.nameProduct), {
        name: data.nameProduct,
        quantity: data.quantity,
        price: data.price,
        weight: data.weight,
        description: data.description,
      });
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
          {...register("nameProduct")}
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
