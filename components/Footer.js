import { Grid, Link, Text, Popover, useTheme } from '@zeit-ui/react';
import { LogIn } from '@zeit-ui/react-icons';
import { Moon, Sun } from '@zeit-ui/react-icons';
import { useState } from 'react';

const Footer = (props) => {
  const theme = useTheme().type;
  const [curr, setCurr] = useState(theme);

  const content = () => (
    <>
      <Popover.Item title>
        <span>User Settings</span>
      </Popover.Item>
      <Popover.Item>
        <Link block underline href="#">
          A hyperlink
        </Link>
      </Popover.Item>
      <Popover.Item>
        <Link block underline color href="#">
          A hyperlink for edit profile
        </Link>
      </Popover.Item>
      <Popover.Item line />
      <Popover.Item>
        <span>Command-Line</span>
      </Popover.Item>
    </>
  );
  return (
    <>
      <Grid.Container justify="center" alignItems="center">
        <Link href="#" underline color block>
          <Text h4 type="success" style={{ letterSpacing: '1px', textDecoration: 'underline', textDecorationStyle: 'dashed' }}>
            ayushgoyal.dev
          </Text>
        </Link>
        <Grid alignItems="center">
          {curr === 'light' ? (
            <Moon
              size={30}
              onClick={(_) => {
                props.switchTheme();
                setCurr('dark');
              }}
            />
          ) : (
            <Sun
              size={30}
              onClick={(_) => {
                props.switchTheme();
                setCurr('light');
              }}
            />
          )}
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Footer;
