import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TableFooter from './TableFooter';

export default {
  title: 'Components/table/TableFooter',
  component: TableFooter,
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Sets the background color of the footer'
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the footer is non-interactive and styled differently'
    },
  },
} as Meta<typeof TableFooter>;

const Template: StoryFn<typeof TableFooter> = (args) => <table><tfoot><TableFooter {...args} /></tfoot></table>;

export const DefaultFooter = Template.bind({});
DefaultFooter.args = {
  children: 'Sample Footer Content',
};

export const DisabledFooter = Template.bind({});
DisabledFooter.args = {
  children: 'Disabled Footer',
  disabled: true
};

export const FooterWithCustomBackgroundColor = Template.bind({});
FooterWithCustomBackgroundColor.args = {
  children: 'Custom Background Footer',
  backgroundColor: '#bee0e6'
};
