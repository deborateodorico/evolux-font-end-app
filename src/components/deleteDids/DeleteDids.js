import React from 'react';
import styles from './DeleteDids.module.scss';
import { useDispatch } from 'react-redux';
import { deleteDid } from '../../redux/didsSlice';
import deleteIcon from '../../icons/deleteIcon.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DeleteDids({ id }) {
  const dispatch = useDispatch();

  const deleteDidNotify = () => toast.success('Did Deleted!');

  const handleDeleteDidButton = () => {
    if (window.confirm('Do you really want delete?')) {
      dispatch(deleteDid(id));
      deleteDidNotify();
    }
  };
  return (
    <button
      type='button'
      className={`btn btn-sm ${styles['delete-did-button']}`}
      onClick={handleDeleteDidButton}
      aria-label='delete did button'
    >
      <img
        src={deleteIcon}
        alt='delete icon'
        className={styles['delete-icon']}
      />
    </button>
  );
}
