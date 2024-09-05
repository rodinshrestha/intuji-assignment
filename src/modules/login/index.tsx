'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import Typography from '../core/components/Typography';
import InputField from '../core/components/InputField';
import Button from '../core/components/Button';
import toastAlert from '../core/utils/toast';

import { loginUser } from './actions/login-action';
import { StyledDiv } from './style';

const Login = () => {
  const [loader, setLoader] = React.useState(false);
  const [credentials, setCredentials] = React.useState({
    email: 'admin@exmaple.com',
    password: 'admin123',
  });

  const router = useRouter();

  const handleOnSubmit = () => {
    setLoader(true);
    const { email = '', password = '' } = credentials || {};
    loginUser(email, password)
      .then(() => {
        router.push('/');
      })
      .catch(() => {
        toastAlert('Error', 'error');
      })
      .finally(() => setLoader(false));
  };

  return (
    <StyledDiv>
      <form className="login-wrapper" onSubmit={handleOnSubmit}>
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
          disabled={loader}
          isLoading={loader}
          type="submit"
        >
          Login
        </Button>
      </form>
    </StyledDiv>
  );
};

export default Login;
