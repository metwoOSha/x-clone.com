import { ComponentPropsWithoutRef } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    variant: 'follow' | 'edit' | 'post' | 'following' | 'social';
    children?: React.ReactNode;
}
