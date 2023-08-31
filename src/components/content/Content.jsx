import React, { useState } from 'react';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { followersInfo } from '../../gateway/followersInfo';
import MessageModal from '../messageModal/MessageModal';
import Button from '../button/Button';
import './content.css';

const Content = () => {
  const [isOpenModal, setStatusModal] = useState(false);

  const [followState, setFollowState] = useState({
    label: 'FOLLOW',
    icon: faPlus,
  });

  const toggleFollow = () => {
    setFollowState((prevState) => ({
      label: prevState.label === 'FOLLOW' ? 'unfollow' : 'FOLLOW',
      icon: prevState.icon === faPlus ? faMinus : faPlus,
    }));
  };

  const handleStatusModal = () => {
    setStatusModal(!isOpenModal);
  };

  const { label, icon } = followState;

  return (
    <div className="content">
      <div className="logo__wrapper">
        <div className="logo slide-in-bck-center"></div>
      </div>
      <div className="buttonGroup">
        <Button
          text="MESSAGE"
          icon={faComment}
          onClick={handleStatusModal}
          className="btn__content"
        />

        <Button
          text={label}
          icon={icon}
          onClick={toggleFollow}
          className="btn__content"
        />
      </div>

      <div className="infoGroup">
        {followersInfo.map(({ amount, category }) => (
          <div className="categoryInfo" key={category}>
            <div className="categoryInfo__quantity">{amount}K</div>
            <span className="categoryInfo__label">{category}</span>
          </div>
        ))}
      </div>
      {isOpenModal && <MessageModal closeModal={handleStatusModal} />}
    </div>
  );
};

export default Content;
