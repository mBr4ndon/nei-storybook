import { themes } from '@storybook/theming';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import myTheme from './mytheme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: myTheme,
  },
}

addDecorator(withInfo); 