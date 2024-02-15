import { createConfig } from '@gluestack-ui/themed';
import {config as defaultConfig } from '@gluestack-ui/config';
import appColors from './appColors';

export const config = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors:{
        ...defaultConfig.colors,
        ...appColors
    },
    fontSizes: {
      ...defaultConfig.tokens.fontSizes,
      newFontSize: 20,
    }
  }
});