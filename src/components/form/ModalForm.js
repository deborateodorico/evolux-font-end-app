import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewDid } from '../../redux/didsSlice';
import styles from './ModalForm.module.scss';

export default function ModalForm() {
  const dispatch = useDispatch();

  const [inputValue, setInputvalue] = useState({
    value: '',
    monthyPrice: '',
    setupPrice: '',
    currency: '',
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(addNewDid(inputValue));
    setInputvalue({
      ...inputValue,
      value: '',
      monthyPrice: '',
      setupPrice: '',
      currency: '',
    });
  };

  const handleValue = (e) => {
    const newValue = e.target.value;

    setInputvalue({
      ...inputValue,
      value: newValue,
    });
  };

  const handleMonthyPrice = (e) => {
    const newMonthyPrice = e.target.value;

    setInputvalue({
      ...inputValue,
      monthyPrice: newMonthyPrice,
    });
  };

  const handleSetupPrice = (e) => {
    const newSetupPrice = e.target.value;

    setInputvalue({
      ...inputValue,
      setupPrice: newSetupPrice,
    });
  };

  const handleCurrency = (e) => {
    const newCurrency = e.target.value;

    setInputvalue({
      ...inputValue,
      currency: newCurrency,
    });
  };

  return (
    <div className={styles['modal-form-container']}>
      <form onSubmit={handleSubmitForm} className={styles.form}>
        <div className={styles['input-group-container']}>
          <label className='mb-3' htmlFor='number-available'>
            Add Number Available:
            <input
              type='tel'
              name='number-available'
              placeholder='Number Available'
              className='form-control'
              value={inputValue.value}
              onChange={handleValue}
              id='number-available'
              required={true}
            />
          </label>

          <label className='mb-3' htmlFor='monthy-price'>
            Add Monthy Price:
            <input
              type='number'
              name='monthy-price'
              placeholder='Monthy Price'
              className='form-control'
              value={inputValue.monthyPrice}
              onChange={handleMonthyPrice}
              id='monthy-price'
              required={true}
            />
          </label>
          <label className='mb-3' htmlFor='setup-price'>
            Add Setup Price:
            <input
              type='number'
              name='setup-price'
              placeholder='Setup Price'
              className='form-control'
              value={inputValue.setupPrice}
              onChange={handleSetupPrice}
              id='setup-price'
              required={true}
            />
          </label>
          <label className='mb-3' htmlFor='currency'>
            Add Currency:
            <input
              type='text'
              name='currency'
              placeholder='Currency'
              className='form-control'
              value={inputValue.currency}
              onChange={handleCurrency}
              id='currency'
              required={true}
            />
          </label>
        </div>
        <div className={styles['add-did-button-container']}>
          <button
            className={`btn btn-warning ${styles['add-did-button']}`}
            type='submit'
          >
            Add New Did
          </button>
        </div>
      </form>
    </div>
  );
}
