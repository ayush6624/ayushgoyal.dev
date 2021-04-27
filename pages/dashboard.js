import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import Skeleton from 'react-loading-skeleton';
import {
  Text,
  Button,
  Grid,
  Input,
  Card,
  Divider,
  Code,
  Dot,
  Link,
} from '@geist-ui/react';
import { useSession, signOut } from 'next-auth/client';
import { BASE_URL } from '../lib/url';
import { useRouter } from 'next/router';
import DNS_Dashboard from './dns';
import Nextlink from 'next/link';

function Dashboard() {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) router.push('/login');
  }, [session]);

  /* Card has DNS Wwritten on it, with an Online Dot staus,. the number of Records, and last updated! */

  const typeLeft = ['secondary', 'success', 'warning', 'error', 'dark'];
  const typeRight = ['alert', 'purple', 'violet', 'cyan', 'lite'];
  return (
    <>
      <Grid.Container
        gap={1}
        justify="center"
        // alignContent="center"
        // alignItems="center"
        direction="row"
      >
        <Grid xs={12} md={12}>
          <Card width="400px">
            <Card.Content>
              <Text h3 b>
                DNS
              </Text>
            </Card.Content>
            <Divider y={0} />
            <Card.Content>
              <Text>
                <Dot style={{ marginRight: '20px' }} type="success">
                  35 Records Found
                </Dot>
              </Text>
              <Text>Last updated 3 days ago</Text>
            </Card.Content>
            <Card.Footer>
              <Nextlink href="/dns">
                <Link block>ayushgoyal.dev</Link>
              </Nextlink>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
      <Button
        type="secondary"
        shadow
        onClick={(_) => signOut({ callbackUrl: `${BASE_URL}/login` })}
      >
        Logout
      </Button>
    </>
  );
}

export default Dashboard;
