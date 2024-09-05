import React from 'react';

import Typography from '@/modules/core/components/Typography';
import Button from '@/modules/core/components/Button';
import toastAlert from '@/modules/core/utils/toast';
import Modal from '@/modules/core/components/Modal';

import { removePlayer } from '../../actions/player-actions';

import { StyledDiv } from './style';
type Props = {
  fullName: string;
  id: string;
  onClose: () => void;
  isOpen: boolean;
};

const RemovePlayerModal = ({ fullName, id, onClose, isOpen }: Props) => {
  const [loader, setLoader] = React.useState(false);

  const onDelete = () => {
    setLoader(true);

    removePlayer(id)
      .then(() => {
        onClose();
        toastAlert('Player Removed', 'success');
      })
      .catch(() => {
        toastAlert('Error', 'error');
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <Modal open={isOpen} onClose={onClose} title="Delete Confirmation">
      <StyledDiv>
        <Typography variant="p">{`Are you sure you want to remove "${fullName}" Player?`}</Typography>

        <div className="btn-group">
          <Button
            variant="contained"
            onClick={onDelete}
            isLoading={loader}
            disabled={loader}
          >
            Procced
          </Button>
          <Button variant="outline" onClick={onClose} disabled={loader}>
            Cancel
          </Button>
        </div>
      </StyledDiv>
    </Modal>
  );
};

export default RemovePlayerModal;
