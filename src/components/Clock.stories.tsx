import type { Meta, StoryObj } from '@storybook/react';
import Clock from './Clock';

const meta: Meta<typeof Clock> = {
  title: 'Components/Clock',
  component: Clock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Clock>;

export const Default: Story = {};

export const CustomTime: Story = {
  render: () => {
    const customTime = new Date();
    customTime.setHours(10);
    customTime.setMinutes(10);
    customTime.setSeconds(30);
    return <Clock initialTime={customTime} />;
  },
};
