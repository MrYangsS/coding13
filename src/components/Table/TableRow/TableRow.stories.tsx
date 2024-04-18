import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TableRow from './TableRow';

export default {
  title: 'Components/table/TableRow',
  component: TableRow,
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'If true, the row is non-interactive and styled differently'
    },
  },
} as Meta<typeof TableRow>;

const Template: StoryFn<typeof TableRow> = (args) => (
  <table>
    <tbody>
      <TableRow {...args}>
        <td>Column 1</td>
        <td>Column 2</td>
      </TableRow>
      <TableRow {...args}>
        <td>Column 3</td>
        <td>Column 4</td>
      </TableRow>
    </tbody>
  </table>
);

export const DefaultRow = Template.bind({});
DefaultRow.args = {};

export const DisabledRow = Template.bind({});
DisabledRow.args = {
  disabled: true,
};
