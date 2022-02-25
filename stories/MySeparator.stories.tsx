import React from 'react';
import { storiesOf } from '@storybook/react';
import { MySeparator } from '../src/components/MySeparator';

storiesOf('MySeparator', module).add('Default', () => (
    <div
        style={{
        width: '300px',
        padding: '20px 10px',
        backgroundColor: '#000',
        }}
    >
        <MySeparator />
    </div>
));