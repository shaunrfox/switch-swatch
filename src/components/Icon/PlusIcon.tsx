import React from 'react';

import SvgIcon, { SvgIconProps } from '../SvgIcon/SvgIcon';

const PlusIcon: React.FunctionComponent<SvgIconProps> = ({ ...props }) => {
    return (
        <SvgIcon {...props}>
            <path d="M12.7487 8.00267H11.2487V11.2513H8V12.7513H11.2487V16.0027H12.7487V12.7513H16V11.2513H12.7487V8.00267Z" />
        </SvgIcon>
    );
};

export default PlusIcon;
