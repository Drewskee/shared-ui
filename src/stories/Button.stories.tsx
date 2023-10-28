import type { Meta, StoryObj } from '@storybook/react';
import Button from './../components/Button';
import { ColorKey, ButtonVariant } from './../components/shared.types';

// exclude:/.*/g
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    controls: {
      exclude: 'aria-disabled',
      include: /(?:\b|')(variant|disabled|text|brandColor)(?:\b|')/
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: () => console.log("infini-ui"),
    brandColor: { options: [ColorKey.primary, ColorKey.secondary, ColorKey.white, ColorKey.tertiary] },
    variant: {
      options: [ButtonVariant.filled, ButtonVariant.outlined, ButtonVariant.ghost],
      defaultValue: ButtonVariant.filled,
      control: 'radio'
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    dataTestId: "test-id",
    classOverrides: '',
    disabled: false,
    text: "Make A Payment",
    onClick: () => alert("You Clicked Me"),
    variant: ButtonVariant.filled,
    brandColor: ColorKey.primary,
  },
};

export const Empty: Story = {
  args: {
    dataTestId: "test-id",
    classOverrides: '',
    disabled: false,
    onClick: () => alert("You Clicked Me"),
    variant: ButtonVariant.ghost,
    brandColor: ColorKey.secondary,
    text: "Make A Payment",
  },
};

export const Light: Story = {
  args: {
    dataTestId: "test-id",
    classOverrides: '',
    disabled: false,
    onClick: () => alert("You Clicked Me"),
    variant: ButtonVariant.filled,
    brandColor: ColorKey.white,
    text: "Make A Payment",
  },
};
