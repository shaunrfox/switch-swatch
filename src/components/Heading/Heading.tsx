import React from 'react';
import styled from '@emotion/styled';

import { themeHelper, sxPropHelper, StyleProps } from '../../utils/styled';

interface HeadingProps extends StyleProps {
    children: React.ReactNode;
    level: 1 | 2 | 3 | 4 | 5;
}

const Heading = styled.h2<HeadingProps>(
    ({ level, ...props }) =>
        themeHelper({
            fontSize: level,
            lineHeight: '125%',
            fontFamily: 'Source Sans Pro, sans-serif',
            fontWeight: 'bold',
            color: 'neutral.9',
        })(props),
    sxPropHelper,
);

export default Heading;
