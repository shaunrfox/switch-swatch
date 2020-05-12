import React from 'react';

import SvgIcon, { SvgIconProps } from '../SvgIcon/SvgIcon';

const NotchRightIcon: React.FunctionComponent<SvgIconProps> = ({
    ...props
}) => {
    return (
        <SvgIcon {...props}>
            <path d="M9.5 9V15L14.5 11.9965L9.5 9Z" />
        </SvgIcon>
    );
};

export default NotchRightIcon;
