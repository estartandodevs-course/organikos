import { StarContainer } from './styles';
import { v4 as uuidv4 } from 'uuid';

export const Rating = ({ rating = 0, size, children }) => {
  const starRating = new Array(rating).fill(1);

  if (rating < 5) {
    for (let i = 0; i <= 5; i++) {
      if (i > starRating.length) {
        starRating.push(0);
      }
    }
  }

  return (
    <StarContainer size={size}>
      <h2>{children}</h2>
      <ul>
        {starRating.map(item =>
          item ? (
            <img key={uuidv4()} src="/assets/icons/starFill.svg" />
          ) : (
            <img key={uuidv4()} src="/assets/icons/star.svg" />
          )
        )}
      </ul>
    </StarContainer>
  );
};
