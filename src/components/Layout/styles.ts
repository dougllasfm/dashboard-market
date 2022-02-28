import styled from "styled-components";
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo";
import { LogOut } from "@styled-icons/entypo/LogOut"
import { Menu } from "@styled-icons/boxicons-regular/Menu";

type Props = {
  menu: boolean
}

export const Sidebar = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props) => (props.menu ? '240px' : '70px')};
  padding: 6px 14px;
  transition: all 0.4s ease;

  background-color: var(--primary);
`;

export const LogoContent = styled.div`
`;

export const Logo = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  color: #fff;
`;

export const IconLogo = styled(ReactLogo)<Props>`
  width: 3rem;
  height: 3rem;
  margin: 0 0.5rem;
  display: ${(props) => (props.menu ? "flex" : "none")};
`;

export const LogoName = styled.div<Props>`
  font-size: 2rem;
  font-weight: 400;
  display: ${(props) => (props.menu ? "flex" : "none")};
`;

export const IconMenu = styled(Menu)<Props>`
  position: absolute;
  right: ${(props) => (props.menu ? "0.5rem" : "2rem")};
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  line-height: 50px;
  transition: all 0.5s ease;
  border-radius: 4px;
  padding: 0 5px;
  margin: 5px 0;
  cursor: pointer;

  &:hover {
    background: var(--white);
    > div {
      > span {
        color: var(--primary);
      }
      > svg {
        color: var(--primary);
      }
    }
  }
`;

export const ProfileContent = styled.div`
  position: absolute;
  color: #fff;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 6px;
  height: 60px;
  background: #1d1b31;
`;

export const ProfileDetails = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 4px;
  display: ${(props) => (props.menu ? "flex" : "none")};

  > img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 50px;
  }
`;

export const Name = styled.div`
  font-size: 1.6rem;
  margin-left: 5px;
`;

export const IconLogout = styled(LogOut)<Props>`
  width: 3rem;
  height: 3rem;
  color: #fff;
  margin-left: ${(props) => (props.menu ? "10px" : "14px")};
  cursor: pointer;

  &:hover {
    color: #615ba4;
  }
`;

export const Content = styled.div<Props>`
  position: absolute;
  width: ${(props) => (props.menu ? "calc(100% - 240px)" : "calc(100% - 70px)")};
  left: ${(props) => (props.menu ? "240px" : "70px")};
  font-size: 1.6rem;
  transition: all 0.4s ease;
  padding: 10px;
`