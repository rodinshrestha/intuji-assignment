'use client';
import React from 'react';

import Modal from '@/modules/core/components/Modal';
import Typography from '@/modules/core/components/Typography';
import Button from '@/modules/core/components/Button';

import { StyledDiv } from './style';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  hasKey: string;
};

const ShareModal = ({ isOpen, onClose, hasKey }: Props) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const siteName =
    process.env.NEXT_PUBLIC_HOST_SITE || 'https://intuji-assignment.vercel.app';

  const sharedURL = `${siteName}/shared/${hasKey}`;

  return (
    <Modal open={isOpen} onClose={onClose} title="Share this link with anyone">
      <StyledDiv>
        <div className="content-wrapper">
          <Typography variant="p">{sharedURL}</Typography>
          <Typography variant="span">
            Note: Once the modal is closed, link will be disappeared.
          </Typography>
        </div>

        <div className="btn-group">
          <Button
            variant="contained"
            onClick={() => {
              navigator.clipboard.writeText(sharedURL);
              setIsCopied(true);
            }}
            disabled={isCopied}
          >
            {isCopied ? 'Copied' : 'Copy'}
          </Button>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </StyledDiv>
    </Modal>
  );
};

export default ShareModal;
