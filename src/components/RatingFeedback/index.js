import { useState } from 'react';
import { Stars } from './styles';

export const RatingFeedback = () => {
  const stars = Array(5).fill(0);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Stars>
      {stars.map((_, index) => {
        return (
          <img
            src={isFavorite ? 'assets/icons/starFill.svg' : '/assets/icons/star.svg'}
            key={index}
            onClick={() => setIsFavorite(prev => !prev)}
          />
        );
      })}
    </Stars>
  );
};
