

import React from 'react';
import { Story, Meta } from '@storybook/react';

import Radio from './Radio';

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: Story = (args) => <Radio label={''} {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Radio Button',
};


export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Radio Button',
  disabled: true,
};
