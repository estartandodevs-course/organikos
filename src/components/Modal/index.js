import { useContext } from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from '../../contexts/ModalContext';
import { Box, Container } from './styles';

export const Modal = ({ children, name }) => {
  const { isOpen, handleModalClose } = useContext(ModalContext);
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Container>
      <Box>
        <header>
          <h2>{name}</h2>
          <img onClick={handleModalClose} src="../assets/icons/close.svg" alt="item de fechar" />
        </header>
        <p>{children}</p>
      </Box>
    </Container>,
    document.getElementById('modal')
  );
};
