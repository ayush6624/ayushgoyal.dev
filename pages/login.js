import { Text, Button, Grid, Input } from '@zeit-ui/react';
import React, { useEffect, useState, useCallback } from 'react';
import useAuth, { ProtectRoute } from '../lib/auth_context';
import Center from '../components/Center';
import { FcGoogle } from 'react-icons/fc';
import { LogIn, User, Lock, AlertCircle } from '@zeit-ui/react-icons';
import { GoogleLogin } from 'react-google-login';

function Login() {
  const { login, oauth_login, logout, user, loading, isAuthenticated } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    console.log('once to check if account exists');
  }, []);
  const Google_Login_Button = (props) => {
    return (
      <Button type="secondary" shadow onClick={props.onClick}>
        <FcGoogle />
      </Button>
    );
  };

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
          <GoogleLogin render={(props) => Google_Login_Button(props)} clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_KEY} onSuccess={(resp) => oauth_login(resp, 'google')} onFailure={(resp) => console.log(resp)} cookiePolicy={'single_host_origin'} />
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default Login;
