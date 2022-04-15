import React from 'react';
import styles from './DeleteDids.module.scss';
import { useDispatch } from 'react-redux';
import { deleteDid } from '../../redux/didsSlice';

export default function DeleteDids({ id }) {
  const dispatch = useDispatch();

  const handleDeleteDidButton = () => {
    dispatch(deleteDid(id));
  };
  return (
    <button
      type='button'
      className={`btn btn-sm btn-danger ${styles['delete-did-button']}`}
      onClick={handleDeleteDidButton}
    >
      Delete
    </button>
  );
}
