import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  content: 'Card Content',
  imageUrl: '/h.jpg', 
};
