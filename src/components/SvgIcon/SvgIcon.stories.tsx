import React from 'react';
import { text } from '@storybook/addon-knobs';

import Center from '../../../.storybook/decorators/Center';
import SvgIcon from './SvgIcon';

export default {
    title: 'SvgIcon',
    component: SvgIcon,
    decorators: [Center],
};

export const knobs = () => {
    return (
        <SvgIcon
            fill={text('Fill', '#686868')}
            height={text('Height', '24px')}
            width={text('Width', '24px')}
        >
            <path d="M12.7487 8.00267H11.2487V11.2513H8V12.7513H11.2487V16.0027H12.7487V12.7513H16V11.2513H12.7487V8.00267Z" />
        </SvgIcon>
    );
};
