import { doc, setDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Container,
  Form,
  FormControl,
  FormControlHours,
  Input,
  Notification,
} from "./styles";

type FormData = {
  nameCompany: string;
  addressCompany: string;
  buyMinimum: string;
  taxMinimum: string;
  hourInitial: string;
  hourFinal: string;
};

function ConfigCompany() {
  const [concluded, setConcluded] = useState<boolean>(false);
  const { register, handleSubmit, resetField } = useForm<FormData>();
  const db = getFirestore();

  async function updateHour(data: FormData) {
    try {
      await setDoc(
        doc(db, "companys", "id-" + data.nameCompany.replaceAll(/ /g, "")),
        {
          nameCompany: data.nameCompany,
          addressCompany: data.addressCompany,
          buyMinimum: data.buyMinimum,
          taxMinimum: data.taxMinimum,
          hourInitial: data.hourInitial,
          hourFinal: data.hourFinal,
        }
      );
      resetField("nameCompany");
      resetField("addressCompany");
      resetField("buyMinimum");
      resetField("taxMinimum");
      setConcluded(true);
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }

  return (
    <Container>
      <h1>Editar dados da empresa</h1>
      <Form onSubmit={handleSubmit(updateHour)}>
        <FormControl>
          <input
            type="text"
            placeholder={company?.nameCompany}
            {...register("nameCompany")}
          />
          <input
            type="text"
            placeholder="Endereço"
            {...register("addressCompany")}
          />
        </FormControl>
        <FormControl>
          <input
            type="text"
            placeholder="Taxa de compra mínima"
            {...register("buyMinimum")}
          />
          <input
            type="text"
            placeholder="Taxa mínima de entrega"
            {...register("taxMinimum")}
          />
        </FormControl>
        <FormControlHours>
          <Input>
            <span>Abre</span>
            <input type="time" {...register("hourInitial")} />
          </Input>
          <Input>
            <span>Fecha</span>
            <input type="time" {...register("hourFinal")} />
          </Input>
        </FormControlHours>
        <button type="submit">Salvar</button>
      </Form>
      {concluded && (
        <Notification>
          <p>Dados atualizados com sucesso!</p>
        </Notification>
      )}
    </Container>
  );
}

export default ConfigCompany;
