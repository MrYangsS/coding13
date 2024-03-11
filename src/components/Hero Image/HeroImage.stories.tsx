import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import HeroImage from './HeroImage';
import HeroImageProps from "./HeroImage";

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
} as Meta;

const Template: StoryFn<typeof HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: './h.jpg', 
  altText: 'Hero Image',
};

export const Disabled = Template.bind({});
Disabled.args = {
  imageUrl: './h.jpg',
  altText: 'Disabled Hero Image',
  disabled: true,
};
