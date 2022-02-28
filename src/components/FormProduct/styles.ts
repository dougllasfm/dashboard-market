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
    border: 1px solid var(--border);
    outline: none;
    height: 42px;

    &:focus {
      outline: 0.5px solid #0d0d0d;
    }
  }

  .input-number {
    width: 60px;
  }

  .small {
    width: 100px;
  }

  > textarea {
    padding: 8px;
    border-radius: 3px;
    border: 1px solid var(--border);
    outline: none;

    &:focus {
      outline: 0.5px solid #0d0d0d;
    }
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
    cursor: pointer;
  }
`;
