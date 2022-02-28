import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  
  > h1 {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }

  > div {
    display: flex;
    gap: 10px;
  }
`;

export const Input = styled.div`
  > span {
    font-size: 1.4rem;
    color: var(--primary);
  }

  > input {
    padding: 8px;
    margin-left: 10px;
  }
`
