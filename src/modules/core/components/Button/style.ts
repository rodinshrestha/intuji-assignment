import { rem } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';

const defaultStyle = (theme: DefaultTheme) => css`
  background-color: transparent;
  display: inline-flex;
  padding: ${rem(10)} ${rem(15)};
  border: none;
  transition: 0.3s ease all;
  cursor: pointer;
  margin-right: ${rem(15)};
  font-size: ${rem(14)};
  line-height: ${rem(20)};
  position: relative;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 5px;

  span {
    width: 100%;
    height: 100%;
  }

  &:last-child {
    margin-right: 0;
  }

  &.rounded {
    border-radius: 10px;
  }

  &.full-width {
    width: 100%;
  }

  i {
    line-height: inherit;
    font-size: ${rem(12)};
  }
  .loader-wrap {
    position: static;
    transform: none;
    margin: 0 auto;
  }

  &.contained {
    background-color: ${theme.color.blue['100']};
    color: ${theme.color.white['100']};

    &:hover {
      background-color: ${theme.color.blue['100']};
      color: ${theme.color.white['100']};
    }
  }

  &.outline {
    border-width: 1px;
    border-style: solid;
    border-color: ${theme.color.blue['100']};
    &:hover {
      border-color: ${theme.coreColor.borderColor};
      background-color: ${theme.color.blue['100']};
      color: ${theme.coreColor.primaryBgColor};
    }
  }

  &.isloading {
    cursor: not-allowed;
    background-color: ${theme.coreColor.disableColor};

    &:hover {
      background-color: ${theme.coreColor.disableColor};
    }
    span {
      pointer-events: none !important;
    }
  }
  &.transparent {
    &:hover {
      text-decoration: underline;
    }
  }
  &.disabled {
    /* cursor: not-allowed; */
    background-color: ${theme.coreColor.disableColor};
    opacity: 0.5;
    color: black;

    &:hover {
      background-color: ${theme.coreColor.disableColor};
      color: black;
    }

    span {
      pointer-events: none;
    }
  }

  &.sm {
    min-width: 38px;
  }

  &.md {
    min-width: 100px;
  }

  &.lg {
    min-width: 150px;
  }
  &.fullwidth {
    min-width: 100%;
  }
`;

export const StyledButton = styled.button`
  ${({ theme }) => defaultStyle(theme)}
`;
