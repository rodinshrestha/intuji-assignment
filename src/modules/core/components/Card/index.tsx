'use client';
import React from 'react';

import UserAvatar from 'react-user-avatar';
import { Rating } from 'react-simple-star-rating';

import { PlayerManagementTypes } from '@/modules/player-management/player-management-types';

import Typography from '../Typography';
import Button from '../Button';

import { StyledDiv } from './style';

type Props = {
  name: string;
  onEditClick?: () => void;
  onRemoveClick?: () => void;
  rating?: string;
  showBtn?: boolean;
  playerList?: Array<Omit<PlayerManagementTypes, '_id'>>;
};

const Card = ({
  name,
  rating,
  onEditClick,
  onRemoveClick,
  showBtn = true,
  playerList,
}: Props) => {
  return (
    <StyledDiv className="card-wrapper">
      <div className="avatar-icon-wrapper">
        <UserAvatar size="188" name="Rodin" src="/images/man.png" />
      </div>
      <div className="player-information-container">
        <Typography variant="p">{name}</Typography>
        {rating && (
          <Rating initialValue={Number(rating) || 0} readonly size={30} />
        )}
      </div>
      {showBtn && (
        <div className="action-btn-group">
          <Button variant="transparent" onClick={onEditClick}>
            Edit
          </Button>
          <Button variant="transparent" onClick={onRemoveClick}>
            Remove
          </Button>
        </div>
      )}

      {!!playerList?.length && (
        <>
          <Typography variant="span" className="player-list-text">
            Players List
          </Typography>
          <ol className="player-with-team-list-wrapper">
            {playerList.map((x, i) => {
              return (
                <li key={i}>
                  <Typography variant="span">{`${i + 1}. ${x.player_name}`}</Typography>{' '}
                  <Rating
                    initialValue={Number(x.rating) || 0}
                    readonly
                    size={30}
                  />
                </li>
              );
            })}
          </ol>
        </>
      )}
    </StyledDiv>
  );
};

export default Card;
