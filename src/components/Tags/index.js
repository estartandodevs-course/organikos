import { Container, Tag, Wrapper } from './styles';

const mockTags = {
  Frutas: ['#96322C', '/assets/icons/icons-card/fruits.svg', 'Frutas'],
  Granja: ['#967F2E', '/assets/icons/icons-card/farm.svg', 'Granja'],
  Horta: ['#367122', '/assets/icons/icons-card/vegetable-garden.svg', 'Horta'],
  Carne: ['#6F491D', '/assets/icons/icons-card/meat.svg', 'Carne'],
  Laticinio: ['#163F7B', '/assets/icons/icons-card/dairy.svg', 'Laticionio'],
  Outros: ['#64235D', '/assets/icons/icons-card/others.svg', 'Outros'],
};

export const Tags = ({ categorys }) => {
  return (
    <Container>
      {categorys.map(currentCategory => (
        <Wrapper key={currentCategory} backgroundColor={mockTags[currentCategory][0]}>
          <img src={mockTags[currentCategory][1]} />
          <Tag>{mockTags[currentCategory][2]}</Tag>
        </Wrapper>
      ))}
    </Container>
  );
};
