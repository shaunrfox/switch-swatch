import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import Center from '../../../.storybook/decorators/Center';
import Heading from './Heading';

export default {
    title: 'Heading',
    component: Heading,
    decorators: [Center],
};

export const knobs = () => (
    <Heading level={select('Level', [1, 2, 3, 4, 5], 3)}>
        {text(
            'Children',
            'Spicy jalapeno bacon ipsum dolor amet ham hock short loin spare ribs pork loin. Biltong short loin beef, cow chicken buffalo frankfurter pork loin. Chicken capicola burgdoggen shankle kevin spare ribs shoulder jerky pork belly. Kevin pork filet mignon, meatloaf pastrami ground round shankle ball tip sirloin. Short ribs ground round bacon tri-tip meatball.',
        )}
    </Heading>
);

export const variants = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Heading level={5}>Heading 5</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={1}>Heading 1</Heading>
    </div>
);
