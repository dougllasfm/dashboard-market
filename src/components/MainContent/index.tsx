import { Container } from './styles';

type Props = {
  menuOpen: number
}
 

function MainContent({menuOpen} : Props) {
  return (
    <Container menuOpen={menuOpen}>
      <h1>MainContent</h1>
    </Container>
  );
};

export default MainContent;
