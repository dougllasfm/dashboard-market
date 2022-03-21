import styled from "styled-components";

export const Container = styled.div`
  > h1 {
    margin-bottom: 10px;
  }
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