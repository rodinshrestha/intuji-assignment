import { transparentize } from 'polished';
import styled from 'styled-components';
import { css } from 'styled-components';

interface IProps {
  $color: string | undefined;
  $opacity: number | undefined;
  $zIndex: number | undefined;
  $position: string | undefined;
}

const StyledDiv = styled.div<IProps>`
  ${({ $position, $opacity, $color, $zIndex }) => css`
    position: ${$position ? $position : 'absolute'};
    background-color: ${transparentize(
      $opacity ? $opacity : 0.67,
      $color ? $color : '#f2f2f2'
    )};
    width: 100%;
    height: 100%;
    z-index: ${$zIndex ? $zIndex : 1};
    top: 0;
    left: 0;
    transition: 0.3s ease all;
  `}
`;

export default StyledDiv;

// { theme, position, color, opacity, 'data-zIndex'}
