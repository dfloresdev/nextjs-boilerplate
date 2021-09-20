// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button.component';

export default {
  title: 'atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Button Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  label: 'Button',
  isActive: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Button',
  icon: 'hello',
};
