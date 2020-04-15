import React from 'react';

import Center from '../../../.storybook/decorators/Center';
import Logo from './Logo';
import { number } from '@storybook/addon-knobs';

export default {
    title: 'Logo',
    component: Logo,
    decorators: [Center],
};

export const knobs = () => (
    <Logo height={number('Height', 44)} width={number('Width', 44)} />
);
