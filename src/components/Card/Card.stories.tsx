// Card.stories.tsx
import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library'; // Correct import for userEvent
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    onClick: { action: 'clicked' },
    backgroundColor: {
      control: "color",
      description: 'Background color'
    },
    disabled: {
      control: 'boolean',
      description: "Disable."
    }
  },
} as Meta;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Default: StoryObj<typeof Card> = {
  args: {
    title: 'Card Title',
    content: 'Card Content',
    images: ['/h.jpg', '/h.jpg', '/h.jpg'],
    disabled: false
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const image = canvas.getByRole('img');
    await userEvent.hover(image); 
    await new Promise((resolve) => setTimeout(resolve, 5000)); 
    await userEvent.unhover(image); 
  }
};
