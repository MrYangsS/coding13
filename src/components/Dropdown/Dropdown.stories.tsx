import React from 'react';
import {Meta, StoryFn } from '@storybook/react';

import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    onSelect: { action: 'selected' },
  },

} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} onSelect={args.onSelect || (() => {})} />;


export const Default = Template.bind({});
Default.args = {
  options: ['1', '2', '3'],
  onSelect: (option) => console.log(`Selected option: ${option}`),
};

