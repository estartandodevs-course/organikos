import { Container, Tag, Wrapper } from './styles';
import { tags } from '../../mocks/tags';
import { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext';

export const Tags = ({ categorys, touchable = false }) => {
  const { handleIsTouchable, tagFilter } = useContext(FilterContext);

  return (
    <Container>
      {categorys?.map(currentCategory => (
        <Wrapper
          key={currentCategory}
          backgroundColor={() => {
            if (!touchable) {
              return tags[currentCategory]?.[0];
            } else if (tagFilter.includes(currentCategory)) {
              return '#923FA5';
            } else {
              return tags[currentCategory]?.[0];
            }
          }}
          onClick={() => {
            if (touchable) handleIsTouchable(currentCategory);
          }}
        >
          <img src={tags[currentCategory]?.[1]} />
          <Tag>{currentCategory}</Tag>
        </Wrapper>
      ))}
    </Container>
  );
};
