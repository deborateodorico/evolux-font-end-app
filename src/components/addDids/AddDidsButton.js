import React, { useState } from 'react';
import HyperModal from 'react-hyper-modal';
import ModalForm from '../form/ModalForm';
import styles from './AddDidsButton.module.scss';
import { addNewDid } from '../../redux/didsSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddDidsButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addDidNotify = () => toast.success('Did Added!');

  const handleClickAddDidsButton = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const btnStyle = 'btn btn-warning';

  const updateTextButton = 'Add New Did';

  return (
    <div>
      <HyperModal
        isOpen={modalIsOpen}
        requestClose={handleCloseModal}
        classes={{
          wrapperClassName: styles['modal-wrapper'],
          contentClassName: styles['content-wrapper'],
        }}
      >
        <ModalForm
          value=''
          monthyPrice=''
          setupPrice=''
          currency=''
          id=''
          onSubmit={addNewDid}
          btnStyle={btnStyle}
          updateTextButton={updateTextButton}
          alertMsg={addDidNotify}
        />
      </HyperModal>
      <div className={styles['add-did-button-container']}>
        <button
          type='button'
          onClick={handleClickAddDidsButton}
          className={`btn btn-lg btn-warning btn-sm ${styles['add-did-button']}`}
          aria-label='delete did button'
        >
          Add Did
        </button>
      </div>
    </div>
  );
}
