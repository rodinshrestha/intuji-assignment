import React from 'react';

import clsx from 'clsx';

import { InputStyle, LableStyle, StyledDiv } from './style';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | null;
  className?: string;
  error?: boolean;
  touched?: boolean;
  errorMsg?: string;
  loader?: boolean;
  reference?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
}

const InputField = (props: IProps) => {
  const {
    id,
    className,
    type,
    label,
    name,
    touched,
    errorMsg,
    error,
    reference,
    loader,
    placeholder,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = React.useState(false);

  const isError = error && touched;

  return (
    <>
      <StyledDiv className="input-field">
        {label && (
          <LableStyle
            className={clsx({
              error: !!isError,
              disabled: !!props.disabled,
            })}
            htmlFor={id}
          >
            {label}
          </LableStyle>
        )}
        <div className="input-wrap">
          <InputStyle
            className={clsx(className, {
              error: !!isError,
              disabled: !!props.disabled,
              loader: loader,
            })}
            placeholder={placeholder}
            name={name}
            type={showPassword ? 'text' : type}
            ref={reference}
            {...rest}
          />
          {type === 'password' && (
            <div
              className={clsx('eye', showPassword ? 'hide' : 'show')}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-hidden="true"
            >
              <i className={showPassword ? 'icon-hide' : 'icon-show'} />
            </div>
          )}
        </div>
        {isError && <div className="error-message">{errorMsg}</div>}
      </StyledDiv>
    </>
  );
};

export default InputField;
