'use client';
import React from 'react';

import Typography from '../core/components/Typography';
import InputField from '../core/components/InputField';
import Button from '../core/components/Button';

import { StyledDiv } from './style';
import { loginUser } from './actions/login-action';

const Login = () => {
  const [loader, setLoader] = React.useState(false);
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  });

  const handleOnSubmit = () => {
    setLoader(true);
    const { email = '', password = '' } = credentials || {};
    loginUser(email, password).finally(() => setLoader(false));
  };

  return (
    <StyledDiv>
      <div className="login-wrapper">
        <Typography variant="h1">Log In</Typography>

        <div className="form-field-wrapper">
          <InputField
            name="email"
            label="Email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <InputField
            name="password"
            label="Password"
            type="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>

        <Button
          variant="contained"
          size="lg"
          onClick={handleOnSubmit}
          disabled={loader}
          isLoading={loader}
        >
          Login
        </Button>
      </div>
    </StyledDiv>
  );
};

export default Login;
