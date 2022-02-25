import React from "react";
import { storiesOf } from "@storybook/react";
import { MyButton } from "../src/components/MyButton";

storiesOf('MyButton', module)
    .add('Default', () => <MyButton>Default</MyButton>)
    .add('Outlined', () => <MyButton outlined>Outlined</MyButton>)
    .add('Disabled', () => <MyButton disabled>Default</MyButton>);
