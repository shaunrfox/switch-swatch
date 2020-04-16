import React from 'react';
import styled from '@emotion/styled';

export interface SvgIconProps extends React.SVGProps<SVGElement> {}

const SvgIcon = styled.svg<SvgIconProps>((props) => ({
    fill: (props.theme as any).colors.neutral[7],
}));

SvgIcon.defaultProps = {
    height: '24px',
    viewBox: '0 0 24 24',
    width: '24px',
};

export default SvgIcon;
