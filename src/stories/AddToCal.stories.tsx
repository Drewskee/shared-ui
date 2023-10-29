import type { Meta, StoryObj } from '@storybook/react';
import AddToCal, { ICalendarEvent } from '../components/AddToCalendar';
import { ColorKey, IButtonVariant } from '../components/shared.types';

const DELTA_DAYS = 2;
const event: ICalendarEvent = {
  title: " Your event title ",
  description: " This is your event description ",
  startDate: new Date(),
  endDate: new Date(new Date().setDate(new Date().getDate() + DELTA_DAYS)),
  address: "1234 Infini UI Lane, Atlanta, Ga 12345"
}

// exclude:/.*/g
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Add To Calendar',
  component: AddToCal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    controls: {
      exclude: 'aria-disabled',
      // include: /(?:\b|')(variant|disabled|text|brandColor)(?:\b|')/
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: { control: 'boolean' },
    brandColor: {
      options: [ColorKey.primary, ColorKey.white, ColorKey.tertiary], defaultValue: ColorKey.primary,
      control: 'select'
    },
    variant: {
      options: [IButtonVariant.filled, IButtonVariant.outlined, IButtonVariant.ghost],
      defaultValue: IButtonVariant.ghost,
      control: 'select'
    },
    wrapperCls: { control: 'text', defaultValue : "using tailwind.. ." },
    buttonCls: { control: 'text', defaultValue : "using tailwind.. ."  },
    tooltipListWrapperCls: { control: 'text', defaultValue : "using tailwind.. ."  },
    tooltipListItemCls: { control: 'text', defaultValue : "using tailwind.. ."  }

  },
} satisfies Meta<typeof AddToCal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    disabled: false,
    onClick: () => alert("You Clicked Me"),
    calendarEvent: event
  },
};


// calendarEvent: { control: 'object', defaultValue: event },
//     brandColor: {
//       options: [ColorKey.primary, ColorKey.secondary, ColorKey.white, ColorKey.tertiary], defaultValue: ColorKey.primary,
//       control: 'select'
//     },
//     variant: {
//       options: [IButtonVariant.filled, IButtonVariant.outlined, IButtonVariant.ghost],
//       defaultValue: IButtonVariant.ghost,
//       control: 'select'
//     },
//     testId: { control: 'text' },
//     wrapperCls: { control: 'text' },
//     buttonCls: { control: 'text' },
//     tooltipItemsCls: { control: 'text' },
//     tooltipListWrapperCls: { control: 'text' },
//     tooltipListItemCls: { control: 'text' }

