import styled from "styled-components";

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;
export const FormControl = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin: 10px 0;

  > input {
    padding: 8px;
    width: 300px;
    border-radius: 3px;
    border: 1px solid var(--primary);
    height: 42px;
  }

  > button {
    padding: 8px;
    border: 0;
    outline: none;
    color: #fff;
    background-color: var(--green);
    border-radius: 3px;
    width: 100px;
    font-weight: bold;
  }
`;
