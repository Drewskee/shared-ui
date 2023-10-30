import type { Preview } from "@storybook/react";
import "../dist/infini-ui.tailwind.css";
import { Title, Subtitle, Description, Primary, Controls } from '@storybook/blocks';
import React from 'react';

const preview: Preview = {
  globalTypes: {},
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "dark",
          value: "#464646",
        },
        {
          name: "light",
          value: "#ffffff",
        },
      ],
    },
    theming: {},
    darkMode: {
      classTarget: "html",
      current: "dark",
      defaultValue: true, // Enable dark mode by default on all stories
      stylePreview: true,
    },
    className: {
      defaultValue: "dark", // Set your custom dark mode class name
    },
    themes: {
      list: [
        {
          name: "Light",
          class: "",
          color: "#fff",
          default: true,
        },
        { name: "Dark", class: ["dark"], color: "#000" },
      ],
    },
    docs: {
      toc: false,
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
        </>
      ),
    },
  },
  decorators: [],

};

export default preview;
