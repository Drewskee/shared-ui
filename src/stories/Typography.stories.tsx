import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@components/Typography';

enum TagOptions {
  "h1" = "h1",
  "h2" = "h2",
  "h3" = "h3",
  "h4" = "h4",
  "h5" = "h5",
  "h6" = "h6",
  "p" = "p",
  "span" = "span",
}

// exclude:/.*/g
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    controls: {
      exclude: 'aria-disabled',
      include : /(?:\b|')(textClassOverrides|text|Tag)(?:\b|')/
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: { control: 'text' },
    Tag: { options : [TagOptions.h1, TagOptions.h2, TagOptions.h3, TagOptions.h4, TagOptions.h5, TagOptions.h6, TagOptions.p, TagOptions.span] , control: 'select'},
    textClassOverrides: { control: 'text' },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    text:"made it primary",
    Tag: TagOptions.h1,
  },
};