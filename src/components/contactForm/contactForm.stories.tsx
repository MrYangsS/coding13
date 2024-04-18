// contactForm.stories.tsx
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ContactForm, { ContactFormProps } from './contactForm'; // Adjust the path to ContactForm as needed

export default {
  title: 'Components/ContactForm',
  component: ContactForm,
  argTypes: {
    onSubmit: { action: 'submitted' },
    backgroundColor: {
      control: 'color',
      description: 'Background color for the form'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the form and submit button'
    }
  },
} as Meta<ContactFormProps>;

const Template: StoryFn<ContactFormProps> = (args) => <ContactForm {...args} />;

export const DefaultForm = Template.bind({});
DefaultForm.args = {
  onSubmit: (data: any) => console.log(data),
};

export const DisabledForm = Template.bind({});
DisabledForm.args = {
  onSubmit: (data: any) => console.log(data),
  disabled: true,
  backgroundColor: '#f8f8f8'
};

export const FormWithBackground = Template.bind({});
FormWithBackground.args = {
  onSubmit: (data: any) => console.log(data),
  backgroundColor: '#add8e6'
};
