import React, { useState } from 'react';
import HyperModal from 'react-hyper-modal';
import styles from '../addDids/AddDidsButton.module.scss';
import updateIcon from '../../icons/updateIcon.png';
import ModalForm from '../form/ModalForm';
import { updateDid } from '../../redux/didsSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateDids({
  value,
  monthyPrice,
  setupPrice,
  currency,
  id,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClickAddDidsButton = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const btnStyle = 'btn btn-secondary';

  const updateTextButton = 'Update Did';

  const updateDidNotify = () => toast.success('Did Updated!');

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
          value={value}
          monthyPrice={monthyPrice}
          setupPrice={setupPrice}
          currency={currency}
          id={id}
          onSubmit={updateDid}
          btnStyle={btnStyle}
          updateTextButton={updateTextButton}
          alertMsg={updateDidNotify}
        />
      </HyperModal>

      <button
        type='button'
        onClick={handleClickAddDidsButton}
        className={`btn btn-lg btn-sm ${styles['update-did-button']}`}
        aria-label='update did button'
      >
        <img src={updateIcon} alt='update icon' />
      </button>
    </div>
  );
}
