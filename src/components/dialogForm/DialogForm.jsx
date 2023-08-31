import React from 'react';
import Button from '../button/Button';
import './DialogForm.css';

const DialogForm = ({ register, errors, handleSubmit, closeModal }) => {
  return (
    <form
      onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data));
        closeModal();
      })}
      className="dilogForm"
    >
      <input
        {...register('eMail', {
          required: 'This field is required',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Invalid e-mail'
        },
        })}
        className="dilogForm__input"
        placeholder="your e-mail"
      />
      <span className="error-message">{errors.eMail?.message}</span>
      <textarea
        {...register('textMessage', {
          required: 'This field is required',
          minLength: {
            value: 5,
            message: 'Please write more',
          },
        })}
        className="dilogForm__input"
        placeholder="your message"
      />
      <span className="error-message">{errors.textMessage?.message}</span>
      <div className="buttonGroup">
        <Button text="SABMIT" className="btn__modal btn_save" />
        <Button
          text="Cancel"
          onClick={closeModal}
          className="btn__modal btn_canceled"
        />
      </div>
    </form>
  );
};

export default DialogForm;
