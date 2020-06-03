import { Text, Button, Grid, Input } from '@zeit-ui/react';
import React, { useEffect } from 'react';
import useAuth, { ProtectRoute } from '../auth_context';
import Center from '../components/Center';
import { FcGoogle } from 'react-icons/fc';
import { LogIn, User, Lock } from '@zeit-ui/react-icons';

function Login() {
  let username = 'test@gmail.com';
  let password = 'test';
  const { login, logout, user, loading, isAuthenticated } = useAuth();
  const login_now = async (e) => {
    console.log(user);
    console.log('isAuthenticated -> ', isAuthenticated);
    login(username, password);
    e.preventDefault();
  };
  return (
    <div style={{ minHeight: '81vh', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <Grid.Container gap={1} justify="center" alignItems="center" direction="column">
        <Grid>
          <Text h1>Sign In </Text>
        </Grid>
        <Grid>
          <Input type="email" icon={<User />} clearable placeholder="email@gmail.com">
            Username
          </Input>
        </Grid>
        <Grid>
          <Input.Password icon={<Lock />} placeholder="********">
            Password
          </Input.Password>
        </Grid>
        <Grid>
          <Button type="success" size="large" shadow>
            <div style={{ paddingTop: '5px', paddingBottom: '5px' }}>
              <LogIn />
            </div>
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
