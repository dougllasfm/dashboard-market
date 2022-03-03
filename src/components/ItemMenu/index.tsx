import Link from 'next/link'

import {
  Container,
  IconDashboard,
  IconSettings,
  IconInventory,
  IconOrders
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
    } else if (icon == 3) {
      return <IconSettings />;
    } else {
      return <IconOrders />
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
