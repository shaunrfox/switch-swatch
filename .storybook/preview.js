import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import withTheme from './decorators/withTheme';

import 'normalize.css/normalize.css';

addDecorator(withKnobs);
addDecorator(withTheme);
