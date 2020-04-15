import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import withTheme from './decorators/withTheme';

addDecorator(withKnobs);
addDecorator(withTheme);
