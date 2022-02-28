import { Container, Input } from "./styles";

function ConfigCompany() {
  return (
    <Container>
      <h1>Alterar o horário de funcionamento da empresa.</h1>
      <div>
        <Input>
          <span>Abre</span>
          <input type="time" value="08:00" />
        </Input>

        <Input>
          <span>Fecha</span>
          <input type="time" value="21:00" />
        </Input>
      </div>
    </Container>
  );
}

export default ConfigCompany;
