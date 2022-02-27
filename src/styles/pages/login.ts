import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background: #fff;  
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 60%;
  width: 35%;
  background: var(--primary);
  box-shadow: 3px 3px 10px var(--primary);
  border-radius: 3px;

  > h1 {
    font-size: 2.4rem;
    margin-bottom: 40px;
    color: #fff;
    font-weight: bold;
  }

  > button {
    margin-top: 5px;
    background: var(--darkBlue);
    color: #fff;
    padding: 10px;
    width: 50%;
    border: 0;
    outline: 0;
    border-radius: 3px;
  }
`

export const Input = styled.input`
  border: 0;
  padding: 10px;
  outline: 0;
  margin-top: 5px;
  width: 50%;
  color: #000;
  border-radius: 3px;
`