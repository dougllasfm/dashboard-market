import styled from "styled-components";
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo";
import { LogOut } from "@styled-icons/entypo/LogOut"
import { Menu } from "@styled-icons/boxicons-regular/Menu";

type Props = {
  menuOpen: number
}

export const SideBar = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props) => (props.menuOpen ? '240px' : '70px')};
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
  display: ${(props) => (props.menuOpen ? "flex" : "none")};
`;

export const LogoName = styled.div<Props>`
  font-size: 2rem;
  font-weight: 400;
  display: ${(props) => (props.menuOpen ? "flex" : "none")};
`;

export const IconMenu = styled(Menu)<Props>`
  position: absolute;
  right: ${(props) => (props.menuOpen ? "0.5rem" : "2rem")};
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  list-style: none;
  line-height: 50px;
  transition: all 0.5s ease;
  border-radius: 4px;
  padding: 0 5px;
  margin: 5px 0;
  cursor: pointer;

  &:hover {
    background: var(--white);
    > a {
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
  display: ${(props) => (props.menuOpen ? "flex" : "none")};

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
  margin-left: ${(props) => (props.menuOpen ? "10px" : "14px")};
  cursor: pointer;

  &:hover {
    color: #615ba4;
  }
`;
