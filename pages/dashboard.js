import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import api from '../components/fetcher';
import Skeleton from 'react-loading-skeleton';
import { GoogleLogout } from 'react-google-login';
import { Text, Button, Grid, Input } from '@geist-ui/react';
import { useSession, signOut } from 'next-auth/client';

function Dashboard() {
  const [session] = useSession();
  // const { data: { data } = {}, isValidating } = useSWR(loading ? false : '/cloudflare', api.get);
  // useEffect(() => console.log('loading  -> ', loading), [loading]);
  // const showSkeleton = isValidating || loading;
  // if (showSkeleton) return <Skeleton count={5} />;
  return (
    <>
      <h1>Dashboard</h1>
      {JSON.stringify(session)}
      <Button type="secondary" shadow onClick={(_) => signOut({ callbackUrl: 'http://localhost:3000/login' })}>
        Logout
      </Button>
    </>
  );
}

export default Dashboard;
