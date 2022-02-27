import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import ItemMenu from "../components/ItemMenu";
import MainContent from "../components/MainContent";

import {
  SideBar,
  LogoContent,
  Logo,
  IconLogo,
  LogoName,
  IconMenu,
  List,
  Item,
  ProfileContent,
  Profile,
  ProfileDetails,
  Name,
  IconLogout,
} from "../styles/pages/home";

const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState<number>(1);

  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>

      <SideBar menuOpen={menuOpen} >
        <LogoContent>
          <Logo>
            <IconLogo menuOpen={menuOpen} />
            <LogoName menuOpen={menuOpen}>Sistema</LogoName>
            <IconMenu menuOpen={menuOpen} onClick={() => menuOpen ? setMenuOpen(0) : setMenuOpen(1)} />
          </Logo>
        </LogoContent>
        <List>
          <Item>
            <ItemMenu menuOpen={menuOpen} title="Dashboard" icon={1} />
          </Item>
          <Item>
            <ItemMenu menuOpen={menuOpen} title="Produtos" icon={2} />
          </Item>
          <Item>
            <ItemMenu menuOpen={menuOpen} title="Configurações" icon={3} />
          </Item>
        </List>
        <ProfileContent>
          <Profile>
            <ProfileDetails menuOpen={menuOpen}>
              <img src="/profile.jpeg" alt="" />
              <Name>Douglas munaro</Name>
            </ProfileDetails>
            <IconLogout menuOpen={menuOpen}/>
          </Profile>
        </ProfileContent>
      </SideBar>
      <MainContent menuOpen={menuOpen} />
    </>
  );
};

export default Home;
