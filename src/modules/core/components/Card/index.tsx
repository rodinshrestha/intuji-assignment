'use client';
import React from 'react';

import UserAvatar from 'react-user-avatar';
import { Rating } from 'react-simple-star-rating';

import Typography from '../Typography';
import Button from '../Button';

import { StyledDiv } from './style';

type Props = {
  name: string;
  onEditClick?: () => void;
  onRemoveClick?: () => void;
  rating?: string;
};

const Card = ({ name, rating, onEditClick, onRemoveClick }: Props) => {
  return (
    <StyledDiv>
      <div className="avatar-icon-wrapper">
        <UserAvatar size="188" name="Rodin" src="/images/man.png" />
      </div>
      <div className="player-information-container">
        <Typography variant="p">{name}</Typography>
        {rating && (
          <Rating initialValue={Number(rating) || 0} readonly size={30} />
        )}
      </div>
      <div className="action-btn-group">
        <Button variant="transparent" onClick={onEditClick}>
          Edit
        </Button>
        <Button variant="transparent" onClick={onRemoveClick}>
          Remove
        </Button>
      </div>
    </StyledDiv>
  );
};

export default Card;
