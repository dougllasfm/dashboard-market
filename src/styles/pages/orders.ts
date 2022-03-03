import styled from "styled-components";

export const Container = styled.div`
  > h1 {
    margin-bottom: 10px;
  }
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 98%;
  box-shadow: 2px 2px 10px var(--primary);

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