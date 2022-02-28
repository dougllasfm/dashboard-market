import Link from 'next/link'

import {
  Container,
  IconDashboard,
  IconSettings,
  IconInventory,
} from "./styles";

type Props = {
  link: string
  menu: boolean;
  title: string;
  icon: number;
};

function ItemMenu({ link, menu, title, icon }: Props) {
  function Icon() {
    if (icon == 1) {
      return <IconDashboard />;
    } else if (icon == 2) {
      return <IconInventory />;
    } else {
      return <IconSettings />;
    }
  }

  return (
    <Link href={link}>
      <Container menu={menu}>
        <Icon />
        <span>{title}</span>
      </Container>
    </Link>
  );
}

export default ItemMenu;
