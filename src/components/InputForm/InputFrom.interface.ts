import { ComponentPropsWithoutRef } from 'react';

export interface InputFormProps extends ComponentPropsWithoutRef<'input'> {
    variant: 'name' | 'email';
    onValueChange?: (value: string) => void;
}
