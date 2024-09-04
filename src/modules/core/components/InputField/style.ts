import { rem } from 'polished';
import styled, { css } from 'styled-components';

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    &.input-field {
      display: inline-block;
      width: 100%;
      position: relative;

      .input-field-loader {
        z-index: 100;
      }
    }

    .input-wrap {
      position: relative;
    }

    .error-message {
      color: ${theme.color.red['900']};
      font-size: ${rem(12)};
    }

    .eye {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }
  `}
`;

export const InputStyle = styled.input`
  ${({ theme }) => css`
    display: inline-block;
    font-size: ${rem(14)};
    line-height: ${rem(24)};
    padding: ${rem(5)} ${rem(15)};
    width: 100%;
    background-color: transparent;
    border: 1px solid;
    border-radius: ${theme.radius};
    border-color: ${theme.color.grey[700]};
    color: inherit;

    @media (max-width: ${theme.breakPoints.mobile}) {
      font-size: ${rem(16)};
    }

    &::placeholder {
      color: ${theme.color.black['800']};
      opacity: 0.5;
      font-size: ${rem(14)};
      display: none !important;
    }

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &:-webkit-autofill,
    &:-internal-autofill-selected {
      background-color: transparent;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }

    &.error {
      border-color: ${theme.color.red['900']};
      padding: ${rem(5)} ${rem(10)};

      &::placeholder {
        color: ${theme.color.red['900']} !important;
      }
    }

    &.disabled {
      opacity: 0.4;
    }

    &:autofill,
    &:-webkit-autofill-strong-password,
    &:-webkit-autofill-strong-password-viewable,
    &:-webkit-autofill-and-obscured {
      background-color: inherit !important;
    }

    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  `}
`;

export const LableStyle = styled.label`
  ${({ theme }) => css`
    font-size: ${rem(12)};
    line-height: ${rem(16)};

    &.error {
      color: ${theme.color.red['900']};
    }

    &.disabled {
      opacity: 0.4;
    }
  `}
`;

interface Props {
  color?: string;
}

export const StyledTextArea = styled.textarea`
  border: ${(props: Props) => props.color};
`;
