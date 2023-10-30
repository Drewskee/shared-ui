import type { Meta, StoryObj } from '@storybook/react';
import AddToCal, { ICalendarEvent } from '../components/AddToCalendar';
import { ButtonVariant } from '../components/shared.types';
import { ICalendarOption } from '@components/AddToCalendar/Tooltip';

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
  title: 'InfiniUi/Add To Calendar Button',
  component: AddToCal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    outerHeight: '800px',
    innerHeight:'600px',
    controls: {
      exclude: /(?:\b|')(aria-disabled|brandColor)(?:\b|')/,
      // include: /(?:\b|')(disabled|showBrandIcons|wrapperCls|buttonCls|tooltipListWrapperCls|tooltipListItemCls)(?:\b|')/
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: { control: 'boolean' },
    showBrandIcons: { control: 'boolean' },
    variant: {
      options: [ButtonVariant.filled, ButtonVariant.outlined, ButtonVariant.ghost],
      defaultValue: ButtonVariant.ghost,
      control: 'select'
    },
    wrapperCls: { control: 'text', defaultValue: "using tailwind.. ." },
    buttonCls: { control: 'text', defaultValue: "using tailwind.. ." },
    tooltipListWrapperCls: { control: 'text', defaultValue: "using tailwind.. ." },
    tooltipListItemCls: { control: 'text', defaultValue: "using tailwind.. ." }
  },
} satisfies Meta<typeof AddToCal>;

export default meta;
type Story = StoryObj<typeof meta>;


// TODO - add event click on load
// const clickAction = action('click');
// const mouseoverAction = action('mouseover');

// const Template = (args: any) => ({
//   components: { AddToCal },
//   methods: { action },
//   data: () => ({ args }),
//   template: `
//     <add-to-cal 
//     @click="clickAction()" 
//     @mouseover="mouseoverAction()"
//     v-bind="args" />
//     `,
// })


export const ConfigurableCalendarOptions: Story = {
  args: {
    disabled: false,
    calendarEvent: event,
    variant: ButtonVariant.ghost,
    calendarOptions: [ICalendarOption.Yahoo]
  },
  argTypes: {
    disabled: { control: 'boolean' },
    showBrandIcons: { control: 'boolean' },
    calendarOptions: {
      options: [ICalendarOption.Apple, ICalendarOption.Google, ICalendarOption.Outlook, ICalendarOption.Yahoo],
      control: 'multi-select'
    },
    wrapperCls: { control: 'text', defaultValue: "using tailwind.. ." },
    buttonCls: { control: 'text', defaultValue: "using tailwind.. ." },
    tooltipListWrapperCls: { control: 'text', defaultValue: "using tailwind.. ." },
    tooltipListItemCls: { control: 'text', defaultValue: "using tailwind.. ." }
  },
};


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Ghost: Story = {
  parameters: {
    controls: {
      exclude: /(?:\b|')(variant)(?:\b|')/,
    }
  },
  args: {
    disabled: false,
    calendarEvent: event
  },
};

export const Outlined: Story = {
  parameters: {
    controls: {
      exclude: /(?:\b|')(variant)(?:\b|')/,
    }
  },
  args: {
    disabled: false,
    calendarEvent: event,
    variant: ButtonVariant.outlined
  },
};

export const Filled: Story = {
  parameters: {
    controls: {
      exclude: /(?:\b|')(variant)(?:\b|')/,
    }
  },
  args: {
    disabled: false,
    calendarEvent: event,
    variant: ButtonVariant.filled
  },
};



