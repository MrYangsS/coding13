import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Dropdown from './Dropdown';  


const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown, 
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: "color",
      description: 'Background color for the dropdown.'
    },
    disabled: {
      control: 'boolean',
      description: "Disable the dropdown interaction."
    }
  },
};

export default meta;

// Default story
export const Default: StoryObj<typeof Dropdown> = {
  args: {
    options: [{ id: '1', label: 'Option 1' }, { id: '2', label: 'Option 2' }],
    onSelect: (id) => console.log('Selected:', id),
    disabled: false
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('dropdown-button'));
  }
};

// Disabled state story
export const Disabled: StoryObj<typeof Dropdown> = {
  args: {
    options: [{ id: '1', label: 'Option 1' }, { id: '2', label: 'Option 2' }],
    onSelect: (id) => console.log('Selected:', id),
    disabled: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('dropdown-button'));
  }
};
