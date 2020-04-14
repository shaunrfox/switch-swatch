import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import Center from '../../../.storybook/decorators/Center';
import Text from './Text';

export default {
    title: 'Text',
    component: Text,
    decorators: [Center],
};

export const knobs = () => (
    <Text as="div" level={select('Level', [1, 2, 3, 4, 5], 3)}>
        {text(
            'Children',
            'Spicy jalapeno bacon ipsum dolor amet ham hock short loin spare ribs pork loin. Biltong short loin beef, cow chicken buffalo frankfurter pork loin. Chicken capicola burgdoggen shankle kevin spare ribs shoulder jerky pork belly. Kevin pork filet mignon, meatloaf pastrami ground round shankle ball tip sirloin. Short ribs ground round bacon tri-tip meatball.',
        )}
    </Text>
);

export const variants = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Text level={5}>Text 5</Text>
        <Text level={4}>Text 4</Text>
        <Text level={3}>Text 3</Text>
        <Text level={2}>Text 2</Text>
        <Text level={1}>Text 1</Text>
    </div>
);
