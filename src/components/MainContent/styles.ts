import styled from "styled-components";

type Props = {
  menuOpen: number
}

export const Container = styled.div<Props>`
  position: absolute;
  height: 100%;
  width: ${(props) => (props.menuOpen ? "calc(100% - 240px)" : "calc(100% - 70px)")};
  left: ${(props) => (props.menuOpen ? "240px" : "70px")};
  margin: 10px;
  font-size: 1.6rem;
  transition: all 0.4s ease;
`;
