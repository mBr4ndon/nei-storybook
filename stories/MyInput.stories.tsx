import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { MdSearch } from 'react-icons/md';

import { MyInput } from '../src';

storiesOf('MyInput', module)
    .add('Default', () => {
        const [MyInputValue, setMyInputValue] = useState('');

        return (
            <MyInput
                name="myinput"
                placeholder="Insert text..."
                value={MyInputValue}
                setValue={setMyInputValue}
            />
        );
    })
    .add('With Icon', () => {
        const [MyInputValue, setMyInputValue] = useState('');

        return (
            <MyInput
                name="myinput"
                icon={<MdSearch />}
                placeholder="Insert text..."
                value={MyInputValue}
                setValue={setMyInputValue}
            />
        );
    });