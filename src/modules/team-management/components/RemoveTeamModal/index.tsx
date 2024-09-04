import React from 'react';

import Typography from '@/modules/core/components/Typography';
import Button from '@/modules/core/components/Button';
import Modal from '@/modules/core/components/Modal';

import { removeTeam } from '../../actions/team-server-action';

import { StyledDiv } from './style';

type Props = {
  teamName: string;
  onClose: () => void;
  isOpen: boolean;
  id: string;
};

const RemoveTeamModal = ({ teamName, onClose, isOpen, id }: Props) => {
  const [loader, setLoader] = React.useState(false);

  const handleOnSuccess = () => {
    setLoader(true);

    removeTeam(id)
      .then(() => onClose())
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <Modal open={isOpen} onClose={onClose} title="Delete Confirmation">
      <StyledDiv>
        <Typography variant="p">{`Are you sure you want to remove "${teamName}"?`}</Typography>

        <div className="btn-group">
          <Button
            variant="contained"
            onClick={handleOnSuccess}
            disabled={loader}
            isLoading={loader}
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

export default RemoveTeamModal;
