

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Radio from './Radio';

export default {
  title: 'components/Radio',
  component: Radio,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn = (args) => <Radio label={''} {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Radio Button',
};


export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Radio Button',
  disabled: true,
};
