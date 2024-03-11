import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Img from './Img';

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Img src={''} alt={''} {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'h.jpg', 
  alt: 'A default image',
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'h.jpg', 
  alt: 'A disabled image',
  disabled: true,
};
