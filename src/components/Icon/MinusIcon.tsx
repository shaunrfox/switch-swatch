import React from 'react';

import SvgIcon, { SvgIconProps } from '../SvgIcon/SvgIcon';

const MinusIcon: React.FunctionComponent<SvgIconProps> = ({ ...props }) => {
    return (
        <SvgIcon {...props}>
            <rect x="8" y="11.25" width="8" height="1.5" />
        </SvgIcon>
    );
};

export default MinusIcon;
