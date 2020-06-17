import { Grid, Text, Button, Link, Spacer } from '@zeit-ui/react';
import Nextlink from 'next/link';
import Center from './Center';

const Navbar = (props) => {
  return (
    <>
      <Spacer y={0.5} />
      <Grid.Container justify="space-around">
        <Center xs={8}>
          <Nextlink href="/">
            <Link block underline color>
              <Text h2>Home</Text>
            </Link>
          </Nextlink>
        </Center>
        <Center xs={8}>
          <Nextlink href="/contact">
            <Link block underline color>
              <Text h2>Contact</Text>
            </Link>
          </Nextlink>
        </Center>
        <Center xs={8}>
          <Link block underline icon color href="https://blog.ayushgoyal.dev?utm_source=website" target="_blank">
            <Text h2>Blog</Text>
          </Link>
        </Center>
      </Grid.Container>
    </>
  );
};

export default Navbar;
