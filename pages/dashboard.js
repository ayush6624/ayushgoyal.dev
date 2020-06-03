import React, { useState, useEffect } from 'react';
import useAuth, { ProtectRoute } from '../auth_context';
import useSWR from 'swr';
import api from '../components/fetcher';
import Skeleton from 'react-loading-skeleton';

function Dashboard() {
  const { user, loading } = useAuth();
  const { data: { data } = {}, isValidating } = useSWR(loading ? false : '/cloudflare', api.get);
  useEffect(() => {
    console.log('isValidating -> ', isValidating);
  }, [isValidating]);
  useEffect(() => console.log('loading  -> ', loading), [loading]);
  const showSkeleton = isValidating || loading;
  if (showSkeleton) return <Skeleton count={5} />;
  return (
    <>
      <h1>Dashboard</h1>
      {JSON.stringify(data)}
    </>
  );
}

export default ProtectRoute(Dashboard);
