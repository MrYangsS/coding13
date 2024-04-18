import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Text, { TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    text: {
      control: 'text',
      description: 'The text content to display'
    },
    isPageStory: {
      control: 'boolean',
      description: 'Flag to indicate if the text is part of a page story'
    },
    isTitleText: {
      control: 'boolean',
      description: 'Flag to indicate if the text should be styled as a title'
    },
    backgroundColor: {
      control: 'color',
      description: 'Sets the background color of the text'
    },
  },
} as Meta<TextProps>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const DefaultText = Template.bind({});
DefaultText.args = {
  text: 'This is default text'
};

export const PageStoryText = Template.bind({});
PageStoryText.args = {
  text: 'This is a page story text',
  isPageStory: true
};

export const TitleText = Template.bind({});
TitleText.args = {
  text: 'This is a title text',
  isTitleText: true
};

export const TextWithBackgroundColor = Template.bind({});
TextWithBackgroundColor.args = {
  text: 'This text has a background color',
  backgroundColor: '#add8e6'  // Example with a light blue background
};

export const CombinedText = Template.bind({});
CombinedText.args = {
  text: 'Combined title and background color',
  isTitleText: true,
  backgroundColor: '#ffa500' // Example with an orange background
};
