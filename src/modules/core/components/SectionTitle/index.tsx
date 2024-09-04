import React from 'react';

import Typography from '../Typography';
import Button from '../Button';

import { StyledDiv } from './style';

type Props = {
  title: string;
  buttonLabel?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

const SectionTitle = ({ title, buttonLabel, onClick }: Props) => {
  return (
    <StyledDiv className="section-title-wrapper">
      <Typography variant="h6">{title}</Typography>

      {buttonLabel && (
        <Button variant="contained" onClick={onClick}>
          {buttonLabel}
        </Button>
      )}
    </StyledDiv>
  );
};

export default SectionTitle;
