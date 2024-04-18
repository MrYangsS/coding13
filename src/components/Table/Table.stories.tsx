
import React from 'react';
import { StoryFn, Meta } from "@storybook/react";
import Table from './Table';
import { TableProps } from "./Tabel.types";
import TableRow from './TableRow/TableRow';
import TableCell from './tableCell/TableCell';
import TableHeader from './tableHeader/TableHeader';
import TableFooter from './tableFooter/TableFooter';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<TableProps>= (args) => (
  <>
    <style>
      {`
        table[disabled] td {
          cursor: not-allowed;
        }
      `}
    </style>
    <Table {...args}>
      <TableHeader backgroundColor={!args.disabled ? args.backgroundColor : undefined}>
        <TableRow>
          <TableCell>Header</TableCell>
          <TableCell>Header</TableCell>
        </TableRow>
      </TableHeader>
      <TableRow>
        <TableCell>cell</TableCell>
        <TableCell>cell</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>cell</TableCell>
        <TableCell>cell</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>cell</TableCell>
        <TableCell>cell</TableCell>
      </TableRow>
      <TableFooter>
        <TableRow>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </>
);


export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
