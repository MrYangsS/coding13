// Text.stories.tsx
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Text from './Text';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const PageStory = Template.bind({});
PageStory.args = {
  text: 'This is a Page Story',
  isPageStory: true,
};

export const TitleText = Template.bind({});
TitleText.args = {
  text: 'This is Title Text',
  isTitleText: true,
};
