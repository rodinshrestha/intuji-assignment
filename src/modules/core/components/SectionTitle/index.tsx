import React from 'react';

import Typography from '../Typography';
import Button from '../Button';

import { StyledDiv } from './style';

type Props = {
  title: string;
  buttonLabel?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  loader?: boolean;
};

const SectionTitle = ({ title, buttonLabel, onClick, loader }: Props) => {
  return (
    <StyledDiv className="section-title-wrapper">
      <Typography variant="h6">{title}</Typography>

      {buttonLabel && (
        <Button
          variant="contained"
          onClick={onClick}
          isLoading={loader}
          disabled={loader}
        >
          {buttonLabel}
        </Button>
      )}
    </StyledDiv>
  );
};

export default SectionTitle;
