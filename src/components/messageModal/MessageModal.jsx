import React from 'react';
import  { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import SocialMediaBar from '../socialMediaBar/SocialMediaBar';
import DialogForm from '../dialogForm/DialogForm';
import pirateImage from '../../styles/background/pirate.jpg';
import './messageModal.css';

const modalEl = document.getElementById('modal-root');

const preloadedImage = new Image();
preloadedImage.src = pirateImage;
preloadedImage.onload = () => {
  renderModal();
};

const MessageModal = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="modal__container">
      <div className="modal__content">
        <div className="modal__communication">
          <p className="modal__title">
            Our manager will be happy to read your message
          </p>
          <DialogForm
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            closeModal={closeModal}
          />

          <SocialMediaBar />
        </div>
        <img className="modal__img" src={pirateImage} alt="pirate" />
        <button className="btn__close-message" onClick={closeModal}>
          {' '}
          X{' '}
        </button>
      </div>
    </div>
  );
};

const renderModal = () => {
 return createPortal(<MessageModal />, modalEl);
};

export default MessageModal;

// return createPortal(
//   <div className="modal__container">
//     <div className="modal__content">
//       <div className="modal__communication">
//         <p className="modal__title">
//           Our manager will be happy to read your message
//         </p>
//         <DialogForm
//           register={register}
//           errors={errors}
//           handleSubmit={handleSubmit}
//           closeModal={closeModal}
//         />

//         <SocialMediaBar />
//       </div>
//       <img className="modal__img" src={pirateImage} alt="pirate" />
//       <button className="btn__close-message" onClick={closeModal}>
//         {' '}
//         X{' '}
//       </button>
//     </div>
//   </div>,
//   modalEl
// );
