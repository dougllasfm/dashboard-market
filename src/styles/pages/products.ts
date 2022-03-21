import { Plus } from "@styled-icons/bootstrap/Plus";
import styled from "styled-components";

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
  box-shadow: 3px 8px 30px -10px var(--primary);
  border-radius: 11px;

  td,
  th {
    text-align: left;
    padding: 8px;
    border: none;
  }

  thead, tbody {
    border-collapse: collapse;
    border-radius: 15px;
  }

  tr:nth-child(even) {
    background-color: #dfdeed;
  }
`;
