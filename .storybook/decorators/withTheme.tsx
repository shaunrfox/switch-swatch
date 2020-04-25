import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';

import theme from '../../src/utils/theme';
import globalStyles from '../../src/utils/globalStyles';

const withTheme = (storyFn: () => any) => (
    <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        {storyFn()}
    </ThemeProvider>
);

export default withTheme;
