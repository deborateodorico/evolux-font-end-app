import React from 'react';
import evolux from '../../icons/evolux.png';
import user from '../../icons/user.png';
import styles from './Header.module.scss';
import { Container } from 'react-bootstrap';

export default function Header() {
  return (
    <div className={styles['header-container']}>
      <Container className={styles['layout-header']} fluid='sm'>
        <img src={evolux} alt='evolux header' />
        <img src={user} alt='user icon' className={styles['user-icon']} />
      </Container>
    </div>
  );
}
