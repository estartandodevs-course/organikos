import { StarContainer } from './styles';

export const Rating = ({ rating = 0, size, children, setRatingNumber = () => {} }) => {
  const ratingNumber = parseFloat(rating);
  const starRating = new Array(Math.round(ratingNumber)).fill(1);

  if (ratingNumber < 5) {
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
        {starRating.map((item, index) => (
          <img
            key={index}
            src={item ? 'assets/icons/starFill.svg' : '/assets/icons/star.svg'}
            onClick={() => setRatingNumber(index + 1)}
          />
        ))}
      </ul>
    </StarContainer>
  );
};
