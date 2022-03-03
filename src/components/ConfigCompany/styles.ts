import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;

  > h1 {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }
`;

export const Form = styled.form`
  > button {
    padding: 12px 20px;
    background-color: var(--green);
    border: 0;
    outline: none;
    color: #fff;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;
  }
`;

export const FormControl = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;

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
`;

export const FormControlHours = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.div`
  margin-bottom: 10px;

  > span {
    font-size: 1.4rem;
    color: var(--primary);
  }

  > input {
    padding: 8px;
    margin-left: 10px;
    border-radius: 3px;
    border: 1px solid var(--border);
    outline: none;
    height: 42px;

    &:focus {
      outline: 0.5px solid #0d0d0d;
    }
  }
`;

export const Notification = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2fd072;
  color: #fff;
  width: 300px;
  height: 60px;
  border-radius: 3px;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.4s ease-in;
  animation: fadeout 5s ease-in;
  -moz-animation: fadeout 5s ease-in; /* Firefox */
  -webkit-animation: fadeout 5s ease-in; /* Safari and Chrome */
  -o-animation: fadeout 5s ease-in; /* Opera */
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @-moz-keyframes fadeout {
    /* Firefox */
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @-webkit-keyframes fadeout {
    /* Safari and Chrome */
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @-o-keyframes fadeout {
    /* Opera */
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
