import React from 'react';
import styled from '@emotion/styled';

import { themeHelper, sxPropHelper, StyleProps } from '../../utils/styled';

interface TextProps extends StyleProps {
    children: React.ReactNode;
    level: 1 | 2 | 3 | 4 | 5;
}

const Text = styled.p<TextProps>(
    ({ level, ...props }) =>
        themeHelper({
            fontSize: level,
            lineHeight: '125%',
            fontFamily: 'Source Sans Pro, sans-serif',
            fontWeight: 'normal',
            color: 'neutral.9',
        })(props),
    sxPropHelper,
);

export default Text;
