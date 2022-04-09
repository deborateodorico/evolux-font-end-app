import styles from './Layout.module.scss';
import { Container } from 'react-bootstrap';

export function Layout({ children }) {
  return (
    <Container className={styles.layout} fluid='sm'>
      {children}
    </Container>
  );
}
