import styled from "styled-components";
import { Plus } from "@styled-icons/bootstrap/Plus"

export const Container = styled.div`

  > h1 {
    margin-bottom: 10px;
  }

  > button {
    margin-bottom: 10px;
    background-color: var(--green);
    border-radius: 3px;
    padding: 6px;
    border: 0;
    outline: none;
    color: #fff;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

export const Icon = styled(Plus)`
  width: 2.4rem;
  height: 2.4rem;
  color: #fff;
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 98%;

  td,
  th {
    border: 1px solid #dfdeed;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dfdeed;
  }
`;
