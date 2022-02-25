import React from 'react';

import { Container } from './styles';

export interface Props {
    bgColor?: string;
    color?: string;
    outlined?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}

export function MyButton({
    children,
    bgColor = '#7159c1',
    color = '#fff',
    outlined = false,
    ...props
}) {
  return (
    <Container
      bgColor={bgColor}
      color={color}
      outlined={outlined}
      {...props}
    >
      {children}
    </Container>
  );
};
