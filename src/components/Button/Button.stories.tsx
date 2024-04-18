import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Button from './Button'; // Make sure the path to the Button component is correct

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    backgroundColor: {
      control: 'color',
      description: 'Background color'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable.'
    }
  },
} as Meta<typeof Button>;

export const NavButton: StoryObj<typeof Button> = {
  args: {
    text: 'Nav Button',
    theme: 'nav',
  }
};

export const ImgButton: StoryObj<typeof Button> = {
  args: {
    text: 'Image Button',
    theme: 'img',
  }
};

export const SubmitButtonActive: StoryObj<typeof Button> = {
  args: {
    text: 'Submit Button Active',
    disabled: false,
    theme: 'img',
  }
};

export const SubmitButtonDisabled: StoryObj<typeof Button> = {
  args: {
    text: 'Submit Button Disabled',
    disabled: true,
  }
};

export const HoverInteraction: StoryObj<typeof Button> = {
  args: {
    text: 'Hover', 
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Hover');
    await userEvent.hover(button); 

  }
};
