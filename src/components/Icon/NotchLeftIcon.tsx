import React from 'react';

import SvgIcon, { SvgIconProps } from '../SvgIcon/SvgIcon';

const NotchLeftIcon: React.FunctionComponent<SvgIconProps> = ({ ...props }) => {
    return (
        <SvgIcon {...props}>
            <path d="M14.5 15L14.5 9L9.5 12.0035L14.5 15Z" />
        </SvgIcon>
    );
};

export default NotchLeftIcon;
