'use client';
import React from 'react';

import Typography from '../core/components/Typography';
import InputField from '../core/components/InputField';
import Button from '../core/components/Button';

import { StyledDiv } from './style';

const Login = () => {
  return (
    <StyledDiv>
      <div className="login-wrapper">
        <Typography variant="h1">Log IN</Typography>

        <div className="form-field-wrapper">
          <InputField name="username" label="Username" />
          <InputField name="password" label="Password" />
        </div>

        <Button variant="contained" size="lg">
          Login
        </Button>
      </div>
    </StyledDiv>
  );
};

export default Login;
