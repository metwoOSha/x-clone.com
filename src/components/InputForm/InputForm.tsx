'use client';

import { useState } from 'react';
import cls from './InputForm.module.css';
import { InputFormProps } from './InputFrom.interface';

export default function InputForm({ variant, onValueChange }: InputFormProps) {
    const [hasValue, setHasValue] = useState<boolean>(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setHasValue(value.trim().length > 0);
        onValueChange?.(value);
    }

    return (
        <label className={cls.label} htmlFor={variant}>
            <div className={`${cls.placeholder} ${hasValue ? cls.active : ''}`}>
                <span>
                    {variant === 'name'
                        ? 'Name'
                        : variant === 'email'
                        ? 'Email'
                        : ''}
                </span>
            </div>
            <div className={cls.input}>
                <input
                    id={variant}
                    type={variant === 'email' ? 'email' : 'text'}
                    onChange={(e) => handleChange(e)}
                />
            </div>
        </label>
    );
}
