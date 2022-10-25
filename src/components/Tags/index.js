import { Container, Tag, Wrapper } from './styles';
import { tags } from '../../mocks/tags';

export const Tags = ({ categorys }) => {
  return (
    <Container>
      {categorys.map(currentCategory => (
        <Wrapper key={currentCategory} backgroundColor={tags[currentCategory][0]}>
          <img src={tags[currentCategory][1]} />
          <Tag>{tags[currentCategory][2]}</Tag>
        </Wrapper>
      ))}
    </Container>
  );
};
