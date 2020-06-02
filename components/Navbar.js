import { Grid, Text, Button, Link, Spacer, Popover } from '@zeit-ui/react';
import Nextlink from 'next/link';

const Navbar = () => {
  return (
    <>
      <Grid.Container justify="space-around">
        <Grid xs={8} lg={8} justify="center">
          {/* <Text> */}
          <Nextlink href="/">
            <Link block underline color>
              <Text h2>Home</Text>
            </Link>
          </Nextlink>
          {/* </Text> */}
        </Grid>
        <Grid xs={8} lg={8}>
          {/* <Text> */}
          <Nextlink href="/about">
            <Link block underline color>
              <Text h2>About</Text>
            </Link>
          </Nextlink>
          {/* </Text> */}
        </Grid>
        <Grid xs={8} lg={8} justify="center">
          {/* <Text> */}
          <Link block underline icon color href="https://blog.ayushgoyal.dev" target="_blank">
            <Text h2>Blog</Text>
          </Link>
          {/* </Text> */}
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Navbar;
