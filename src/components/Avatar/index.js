import { Container } from './styles';

export const Avatar = ({ imageUrl = '', username = '', ...restProps }) => {
  const imageFile = imageUrl ? imageUrl : '/assets/icons/icons-profile/profile.svg';

  return (
    <Container {...restProps}>
      <img src={imageFile} alt={username || 'Profile Icon'} />
    </Container>
  );
};
