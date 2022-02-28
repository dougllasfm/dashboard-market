import styled, { css } from "styled-components";
import { Dashboard } from "@styled-icons/boxicons-solid/Dashboard"
import { Settings } from "@styled-icons/evaicons-solid/Settings"
import { Inventory } from "@styled-icons/material/Inventory"

type Props = {
  menu: boolean
}

export const Container = styled.div<Props>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.6rem;

  width: 100%;

  > span {
    font-size: 1.6rem;
    color: #fff;
    display: ${(props) => (props.menu ? "block" : "none")};;
  }
`;

const iconCss = css`
  height: 3rem;
  min-width: 3rem;
  margin-right: 12px;
  line-height: 50px;
  color: #fff;
`

export const IconDashboard = styled(Dashboard)`
  ${iconCss}
`;

export const IconSettings = styled(Settings)`
  ${iconCss}
`

export const IconInventory = styled(Inventory)`
  ${iconCss}
`