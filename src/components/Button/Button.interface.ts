import { ComponentPropsWithoutRef } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    variant:
        | 'follow'
        | 'edit'
        | 'post'
        | 'following'
        | 'social'
        | 'social-black'
        | 'social-google'
        | 'social-github'
        | 'large';
    children?: React.ReactNode;
}
