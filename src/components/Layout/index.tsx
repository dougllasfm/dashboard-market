import { destroyCookie } from "nookies";
import { ReactNode, useState } from "react";
import ItemMenu from "../ItemMenu";
import {
  Content, IconLogo, IconLogout, IconMenu, Item, List, Logo, LogoContent, LogoName, Name, Profile, ProfileContent, ProfileDetails, Sidebar
} from "./styles";


interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [menu, setMenu] = useState<boolean>(true);

  function signOut() {
    destroyCookie(null, "market.token")
    destroyCookie(null, "company.token")
  }

  return (
    <>
      <Sidebar menu={menu}>
        <LogoContent>
          <Logo>
            <IconLogo menu={menu} />
            <LogoName menu={menu}>Sistema</LogoName>
            <IconMenu
              menu={menu}
              onClick={() => (menu ? setMenu(false) : setMenu(true))}
            />
          </Logo>
        </LogoContent>
        <List>
          <Item>
            <ItemMenu link="/dashboard" menu={menu} title="Dashboard" icon={1} />
          </Item>
          <Item>
            <ItemMenu link="/orders" menu={menu} title="Pedidos" icon={4} />
          </Item>
          <Item>
            <ItemMenu link="/products" menu={menu} title="Produtos" icon={2} />
          </Item>
          <Item>
            <ItemMenu
              link="/config"
              menu={menu}
              title="Configurações"
              icon={3}
            />
          </Item>
        </List>
        <ProfileContent>
          <Profile>
            <ProfileDetails menu={menu}>
              <img src="/profile.jpg" alt="" />
              <Name>Nome de usuário</Name>
            </ProfileDetails>
            <IconLogout onClick={signOut} menu={menu} />
          </Profile>
        </ProfileContent>
      </Sidebar>
      <Content menu={menu}>{children}</Content>
    </>
  );
}

export default Layout;
