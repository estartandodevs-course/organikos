import { Container, Tag, Wrapper } from './styles';
import { tags } from '../../mocks/tags';
import { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext';

export const Tags = ({ categorys, touchable = false }) => {
  const { handleIsTouchable, tagFilter } = useContext(FilterContext);

  const colorTag = currentCategory => {
    return touchable && tagFilter.includes(currentCategory) ? '#923FA5' : tags[currentCategory]?.[0];
  };

  return (
    <Container>
      {categorys?.map(currentCategory => (
        <Wrapper
          key={currentCategory}
          backgroundColor={() => colorTag(currentCategory)}
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
