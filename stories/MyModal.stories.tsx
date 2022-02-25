import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { MyModal, MyButton } from '../src';

storiesOf('MyModal', module).add('Test Modal', () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <MyButton onClick={() => setOpen(true)}>Open modal</MyButton>

            <MyModal title="Modal Title" open={open} setOpen={setOpen}>
                Test
            </MyModal>
        </>
    );
});