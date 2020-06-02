import { Grid, Text, Button, Link, Spacer, Popover, Tabs } from '@zeit-ui/react';

export default function About() {
  return (
    <>
      <Tabs initialValue="Home">
        <Tabs.Item label="Home" value="Home">
          <p>HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is.</p>
        </Tabs.Item>
        <Tabs.Item label="CSS" value="css">
          <p>CSS is the language that we can use to style and lay out our web content, as well as adding behavior like animation.</p>
        </Tabs.Item>
      </Tabs>
    </>
  );
}
