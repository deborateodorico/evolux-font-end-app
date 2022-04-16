import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ModalForm.module.scss';
import InputMask from 'react-input-mask';

export default function ModalForm({
  value,
  monthyPrice,
  setupPrice,
  currency,
  id,
  onSubmit,
}) {
  const [inputValue, setInputValue] = useState({
    id,
    value,
    monthyPrice,
    setupPrice,
    currency,
  });
  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(onSubmit(inputValue));

    setInputValue({
      ...inputValue,
      value: '',
      monthyPrice: '',
      setupPrice: '',
      currency: '',
    });
  };

  const handleValue = (e) => {
    const newValue = e.target.value;

    setInputValue({
      ...inputValue,
      value: newValue,
    });
  };

  const handleMonthyPrice = (e) => {
    const newMonthyPrice = e.target.value;

    setInputValue({
      ...inputValue,
      monthyPrice: newMonthyPrice,
    });
  };

  const handleSetupPrice = (e) => {
    const newSetupPrice = e.target.value;

    setInputValue({
      ...inputValue,
      setupPrice: newSetupPrice,
    });
  };

  const handleCurrency = (e) => {
    const newCurrency = e.target.value;

    setInputValue({
      ...inputValue,
      currency: newCurrency,
    });
  };

  return (
    <div className={styles['modal-form-container']}>
      <form onSubmit={handleSubmitForm} className={styles.form}>
        <div className={styles['input-group-container']}>
          <label className='mb-3' htmlFor='number-available'>
            Number Available:
            <InputMask
              mask='+99 (99) 99999-9999'
              value={inputValue.value}
              onChange={handleValue}
              type='tel'
              name='number-available'
              placeholder='Number Available'
              className='form-control'
              id='number-available'
              required={true}
            />
          </label>

          <label className='mb-3' htmlFor='monthy-price'>
            Monthy Price:
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
            Setup Price:
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
            Currency:
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
            className={`btn btn-secondary ${styles['add-did-button']}`}
            type='submit'
          >
            New Did
          </button>
        </div>
      </form>
    </div>
  );
}
