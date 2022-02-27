import { Container, IconDashboard, IconSettings, IconInventory } from "./styles";

type Props = {
  menuOpen: number
  title: string
  icon: number
}

function ItemMenu({menuOpen, title, icon} : Props) {

  function Icon() {
    if (icon == 1) {
      return <IconDashboard />
    } else if (icon == 2) {
      return <IconInventory />
    } else {
      return <IconSettings />
    }
  }

  return (
    <Container menuOpen={menuOpen} href="">
      <Icon />
      <span>{title}</span>
    </Container>
  );
}

export default ItemMenu;
