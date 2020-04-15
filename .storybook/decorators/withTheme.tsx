import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../../src/utils/theme';

const withTheme = (storyFn: () => any) => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default withTheme;
