// Button.stories.tsx
import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";
import React from "react";

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const navButton = Template.bind({});
navButton.args = {
  text: 'Nav Button',
  theme: 'nav', // 设置为 nav 主题
};

export const imgButton = Template.bind({});
imgButton.args = {
  text: 'Image Button',
  theme: 'img', // 设置为 img 主题，与 submitButton 相同
};

export const submitButtonActive = Template.bind({});
submitButtonActive.args = {
  text: 'Submit Button Active',
  disabled: false,
  theme: 'img', // 确保与 imgButton 使用相同的主题
};

export const submitButtonDisable = Template.bind({});
submitButtonDisable.args = {
  text: 'Submit Button Disabled',
  disabled: true,
};

