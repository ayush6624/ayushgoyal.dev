import { Grid, Text, Button, Link, Spacer, Popover } from '@zeit-ui/react';
import { LogIn } from '@zeit-ui/react-icons';

const Footer = () => {
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
      <Grid.Container justify="center">
        <Grid>
          <Link href="#" underline color block>
            <Text h4 type="secondary">
              <div className="footer_link">ayushgoyal.dev</div>
            </Text>
          </Link>
        </Grid>
      </Grid.Container>
      <style jsx>{`
        .footer_link {
          letter-spacing: 1px;
          text-decoration: underline;
          text-decoration-style: dotted;
        }
      `}</style>
    </>
  );
};

export default Footer;
