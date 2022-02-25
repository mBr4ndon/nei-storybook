import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { MyRadio } from '../src';

storiesOf('MyRadio', module)
    .add('MyRadio Group', () => {
        const options = [
        { id: 1, value: 'Alpha' },
        { id: 2, value: 'Beta' },
        ];

        const [option, setOption] = useState(options[1].id);

        return (
            <form>
                {options.map((item) => (
                <MyRadio
                    name="MyRadio"
                    key={item.id}
                    label={item.value}
                    value={item.value}
                    checked={option === item.id}
                    onChange={() => setOption(Number(item.id))}
                />
                ))}
            </form>
        );
    })
    .add('Checked MyRadio', () => (
        <MyRadio
            label="Checked"
            value="Checked"
            name="MyRadio"
            defaultChecked={true}
            readOnly
        />
    ))
    .add('Unchecked MyRadio', () => (
        <MyRadio
            label="Unchecked"
            value="Unchecked"
            name="MyRadio"
            checked={false}
            readOnly
        />
    ));