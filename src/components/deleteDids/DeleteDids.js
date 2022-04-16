import React from 'react';
import styles from './DeleteDids.module.scss';
import { useDispatch } from 'react-redux';
import { deleteDid } from '../../redux/didsSlice';
import deleteIcon from '../../icons/deleteIcon.png';

export default function DeleteDids({ id }) {
  const dispatch = useDispatch();

  const handleDeleteDidButton = () => {
    dispatch(deleteDid(id));
    alert('Deleted did!');
  };
  return (
    <button
      type='button'
      className={`btn btn-sm ${styles['delete-did-button']}`}
      onClick={handleDeleteDidButton}
    >
      <img
        src={deleteIcon}
        alt='delete icon'
        className={styles['delete-icon']}
      />
    </button>
  );
}
