import React from 'react';

import SvgIcon, { SvgIconProps } from '../SvgIcon/SvgIcon';

const CloseIcon: React.FunctionComponent<SvgIconProps> = ({ ...props }) => {
    return (
        <SvgIcon {...props}>
            <path d="M16.705 8.705L15.295 7.295L12.005 10.585L8.705 7.295L7.295 8.705L10.585 12.005L7.295 15.295L8.705 16.705L12.005 13.415L15.295 16.705L16.705 15.295L13.415 12.005L16.705 8.705Z" />
        </SvgIcon>
    );
};

export default CloseIcon;
