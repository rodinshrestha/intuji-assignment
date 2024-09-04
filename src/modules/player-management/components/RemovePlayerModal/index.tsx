import React from 'react';

import Typography from '@/modules/core/components/Typography';
import Button from '@/modules/core/components/Button';
import Modal from '@/modules/core/components/Modal';

import { StyledDiv } from './style';
type Props = {
  fullName: string;
  onSuccess: () => void;
  onClose: () => void;
  isOpen: boolean;
};

const RemovePlayerModal = ({ fullName, onSuccess, onClose, isOpen }: Props) => {
  return (
    <Modal open={isOpen} onClose={onClose} title="Delete Confirmation">
      <StyledDiv>
        <Typography variant="p">{`Are you sure you want to remove "${fullName}" Player?`}</Typography>

        <div className="btn-group">
          <Button variant="contained" onClick={onSuccess}>
            Procced
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </StyledDiv>
    </Modal>
  );
};

export default RemovePlayerModal;
