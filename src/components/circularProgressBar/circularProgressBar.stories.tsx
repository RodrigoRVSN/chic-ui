import React from 'react';
import { Story, Meta } from '@storybook/react';
import { theme } from '../../tokens/themes';

import CircularProgressBar, { CircularProgressBarProps } from './circularProgressBar';

export default {
  title: 'Components/CircularProgressBar',
  component: CircularProgressBar,
  argTypes: {
    type: {
      options: Object.keys(theme),
      control: { type: 'radio' }
    }
  }
} as Meta;

const Template: Story<CircularProgressBarProps> = (args) => <CircularProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 30,
  type: 'primary',
  showProgress: true,
};
