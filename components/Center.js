import { Grid } from '@zeit-ui/react';

const Center = ({ children, ...props }) => {
  return (
    <Grid.Container justify="center" alignItems="center" {...props}>
      {children}
    </Grid.Container>
  );
};

export default Center;
