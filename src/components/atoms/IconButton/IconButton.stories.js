import React from 'react';
import { storiesOf } from '@storybook/react';
import IconButton from './IconButton';
import accountIcon from '../../../assets/icons/account.svg';

storiesOf('IconButton', module).add('Normal', () => <IconButton icon={accountIcon} />);
