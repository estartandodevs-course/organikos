import { Container } from './styles';

export const Avatar = props => {
  return (
    <Container {...props}>
      <img src="/assets/icons/icons-profile/profile.svg" alt="profile icon" />
    </Container>
  );
};
