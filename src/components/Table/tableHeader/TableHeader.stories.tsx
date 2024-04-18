import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TableHeader from './TableHeader';

export default {
  title: 'Components/table/TableHeader',
  component: TableHeader,
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Sets the background color of the header'
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the header is non-interactive and styled differently'
    },
  },
} as Meta<typeof TableHeader>;

const Template: StoryFn<typeof TableHeader> = (args) => (
  <table>
    <TableHeader {...args}>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
      </tr>
    </TableHeader>
  </table>
);

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  children: (
    <tr>
      <th>Default Header</th>
    </tr>
  ),
};

export const DisabledHeader = Template.bind({});
DisabledHeader.args = {
  children: (
    <tr>
      <th>Disabled Header</th>
    </tr>
  ),
  disabled: true,
};

export const HeaderWithCustomBackgroundColor = Template.bind({});
HeaderWithCustomBackgroundColor.args = {
  children: (
    <tr>
      <th>Header with Custom Background</th>
    </tr>
  ),
  backgroundColor: '#88aaff', // Example of a custom background color
};
