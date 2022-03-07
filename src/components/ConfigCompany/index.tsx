import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
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
  const [company, setCompany] = useState<FormData>();
  const { register, handleSubmit, resetField } = useForm<FormData>();
  const db = getFirestore();

  useEffect(() => {
    getDataCompany();
  }, []);

  async function getDataCompany() {
    const { "market.email": token } = parseCookies();
    const companyCollection = doc(db, "Companys", token, "datasCompany", "Company");

    const result = await getDoc(companyCollection);
    if (result.exists()) {
      setCompany(result.data() as FormData);
    } else {
      console.log("No such document!");
    }
  }

  async function updateHour(data: FormData) {
    try {
      if (data.nameCompany != null) {
        await setDoc(
          doc(db, data.nameCompany, "datasCompany"),
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
      }
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
            {...register("nameCompany", { required: true })}
          />
          <input
            type="text"
            placeholder={company?.addressCompany}
            {...register("addressCompany", { required: true })}
          />
        </FormControl>
        <FormControl>
          <input
            type="text"
            placeholder="Compra mínima"
            {...register("buyMinimum", { required: true })}
          />
          <input
            type="text"
            placeholder="Taxa de entrega"
            {...register("taxMinimum", { required: true })}
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
