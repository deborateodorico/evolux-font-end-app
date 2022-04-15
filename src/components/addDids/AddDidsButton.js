import React, { useState } from 'react';
import HyperModal from 'react-hyper-modal';
import ModalForm from '../form/ModalForm';
import styles from './AddDidsButton.module.scss';

export default function AddDidsButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClickAddDidsButton = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

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
        <ModalForm />
      </HyperModal>
      <div className={styles['add-did-button-container']}>
        <button
          type='button'
          onClick={handleClickAddDidsButton}
          className={`btn btn-lg btn-warning btn-sm ${styles['add-did-button']}`}
        >
          Add Did
        </button>
      </div>
    </div>
  );
}
