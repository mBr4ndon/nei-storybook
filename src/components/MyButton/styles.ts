import styled from 'styled-components';
import { lighten, darken } from 'polished';

import { Props } from './index';

export const Container = styled.button<Props>`
    background-color: ${(props) => props.outlined ? 'transparent' : props.bgColor};
    color: ${({ color }: Props) => color};

    padding: 18px 45px;
    text-transform: uppercase;
    font-weight: bold;

    border-radius: 4px;
    border: ${(props) => props.outlined ? `2px solid ${props.bgColor}` : 'none'};

    cursor: pointer;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
        border-color: transparent;
        background-color: ${(props) =>
        props.outlined
            ? props.bgColor
            : lighten(0.03, props.bgColor as string)};
    }

    :active:not(:disabled) {
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
        background-color: ${(props) =>
        darken(0.03, props.bgColor as string)};
    }
`;