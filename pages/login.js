import { Text, Button, Grid, Input } from '@zeit-ui/react';
import React, { useEffect, useState, useCallback } from 'react';
import useAuth, { ProtectRoute } from '../auth_context';
import Center from '../components/Center';
import { FcGoogle } from 'react-icons/fc';
import { LogIn, User, Lock, AlertCircle } from '@zeit-ui/react-icons';
import { useRouter } from 'next/router';

function Login() {
  const { login, logout, user, loading, isAuthenticated } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const emailCallback = useCallback(
    (e) => {
      setEmail(e.target.value);
      setError('');
    },
    [email]
  );

  const passwordCallback = useCallback(
    (e) => {
      setPassword(e.target.value);
      setError('');
    },
    [password]
  );

  const login_now = async (e) => {
    setLoaded(true);
    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(true);
    }
    setLoaded(false);
  };
  return (
    <div style={{ minHeight: '81vh', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <Grid.Container gap={1} justify="center" alignItems="center" direction="column">
        <Grid>
          <Text h1>Sign In </Text>
        </Grid>
        <Grid>
          <Input type="email" icon={<User />} onChange={emailCallback} clearable placeholder="email@gmail.com" onClearClick={(_) => setEmail('')}>
            Username
          </Input>
        </Grid>
        <Grid>
          <Input.Password status={error ? 'warning' : 'default'} icon={<Lock />} onChange={passwordCallback} placeholder="********" onKeyDown={(e) => (e.key === 'Enter' ? login_now() : '')}>
            Password
          </Input.Password>
        </Grid>
        <Grid>
          <Button type={error ? 'error' : 'success'} size="large" loading={loaded} shadow onClick={(e) => login_now(e)}>
            <div style={{ paddingTop: '5px', paddingBottom: '5px' }}>{error ? <AlertCircle /> : <LogIn />}</div>
          </Button>
        </Grid>
        <Grid>
          <Button type="secondary" size="small" shadow>
            <FcGoogle />
          </Button>
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default Login;
