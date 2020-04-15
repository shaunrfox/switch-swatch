import React from 'react';
import styled from '@emotion/styled';

interface HeadingProps {
    children: React.ReactNode;
    level: 1 | 2 | 3 | 4 | 5;
    as?: React.ElementType;
}

const Heading = styled.h2<HeadingProps>((props) => ({
    fontSize: (props.theme as any).fontSizes[props.level],
    lineHeight: '125%',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontWeight: 'bold',
    color: (props.theme as any).colors.neutral[9],
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
}));

export default Heading;
