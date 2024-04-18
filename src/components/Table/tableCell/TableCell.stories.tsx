import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TableCell from './TableCell';

// Ensure TableCell is being imported correctly and that it exports a type that TypeScript can recognize.

export default {
  title: 'Components/table/TableCell',
  component: TableCell,
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the cell'
    },
    backgroundColor: {
      control: 'color',
      description: 'Sets the background color of the cell'
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the cell is non-interactive and styled differently'
    },
  },
} as Meta<typeof TableCell>; // Ensure you are using typeof TableCell to reference the type

const Template: StoryFn<typeof TableCell> = (args) => <TableCell {...args} />;
// Ensure the template returns a JSX element, which TableCell should be if it's a React component.

export const DefaultCell = Template.bind({});
DefaultCell.args = {
  children: 'Default Cell',
};

export const DisabledCell = Template.bind({});
DisabledCell.args = {
  children: 'Disabled Cell',
  disabled: true
};

export const CellWithCustomBackgroundColor = Template.bind({});
CellWithCustomBackgroundColor.args = {
  children: 'Custom Background',
  backgroundColor: '#bee0e6'
};
