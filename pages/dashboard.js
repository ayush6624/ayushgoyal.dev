import React, { useState, useEffect } from 'react';
import useAuth, { ProtectRoute } from '../auth_context';
import useSWR from 'swr';
import api from '../components/fetcher';
import Skeleton from 'react-loading-skeleton';
import { GoogleLogout } from 'react-google-login';
import { Text, Button, Grid, Input } from '@zeit-ui/react';

function Dashboard() {
  const { user, loading, logout } = useAuth();
  const { data: { data } = {}, isValidating } = useSWR(loading ? false : '/cloudflare', api.get);
  useEffect(() => console.log('isValidating -> ', isValidating), [isValidating]);
  useEffect(() => console.log('loading  -> ', loading), [loading]);
  const showSkeleton = isValidating || loading;
  if (showSkeleton) return <Skeleton count={5} />;
  return (
    <>
      <h1>Dashboard</h1>
      {JSON.stringify(user)}
      <Button type="secondary" shadow onClick={(_) => logout()}>
        Logout
      </Button>
    </>
  );
}

export default ProtectRoute(Dashboard);
