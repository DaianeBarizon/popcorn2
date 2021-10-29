import React, { ReactElement } from 'react';
import { ButtonWrapper } from './styles';

interface Props {
    children: React.ReactNode;
}

export const Button = (props: any): ReactElement => {
    return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
};
