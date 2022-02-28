import { useState } from "react";
import { Form, FormControl } from "./styles";
import { collection, addDoc, getFirestore } from "firebase/firestore";

function FormProduct() {
  const [nameProduct, setNameProduct] = useState("");
  const [quantity, setQuantity] = useState("0");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");
  const db = getFirestore();

  async function submitForm() {
    try {
      const docRef = await addDoc(collection(db, "products"), {
        name: nameProduct,
        quantity: quantity,
        price: price,
        weight: weight,
        description: description,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch(error) {
      console.log("ERRO: "+error)
    }
  }

  return (
    <Form onSubmit={submitForm}>
      <FormControl>
        <input
          type="text"
          placeholder="Nome do produto"
          onChange={(event) => setNameProduct(event.target.value)}
          value={nameProduct}
        />
        <input
          className="input-number"
          type="number"
          placeholder="Quantidade"
          min={0}
          onChange={(event) => setQuantity(event.target.value)}
          value={quantity}
        />
      </FormControl>
      <FormControl>
        <input
          className="small"
          type="text"
          placeholder="Preço"
          onChange={(event) => setPrice(event.target.value)}
          value={price}
        />
        <input
          className="small"
          type="text"
          placeholder="Peso"
          onChange={(event) => setWeight(event.target.value)}
          value={weight}
        />
      </FormControl>
      <FormControl>
        <textarea
          placeholder="Descrição do produto"
          rows={4}
          cols={50}
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
      </FormControl>
      <FormControl>
        <button type="submit">Salvar</button>
      </FormControl>
    </Form>
  );
}

export default FormProduct;
