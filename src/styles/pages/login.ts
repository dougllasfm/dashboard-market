import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background: #272442;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 45%;
  background: var(--primary);
  box-shadow: 3px 3px 10px var(--primary);
  border-radius: 3px;

  > h1 {
    font-size: 2.4rem;
    margin-bottom: 40px;
    color: #fff;
    font-weight: bold;
  }

  > a {
    margin-top: 40px;
    color: var(--gray);
    font-size: 1.5rem;
    transition: 0.3s linear;

    &:hover {
      color: #fff;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  > button {
    margin-top: 6px;
    background: var(--white);
    color: var(--primary);
    padding: 10px;
    width: 50%;
    border: 0;
    outline: 0;
    border-radius: 3px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: #c0bddb;
      transition: 0.2s linear;
    }
  }
`;

export const Input = styled.input`
  border: 0;
  padding: 10px;
  outline: 0;
  margin-top: 5px;
  width: 50%;
  color: #000;
  border-radius: 3px;
`;
