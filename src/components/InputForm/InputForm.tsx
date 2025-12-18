'use client';

import { useState } from 'react';
import cls from './InputForm.module.css';
import { InputFormProps } from './InputFrom.interface';

export default function InputForm({ variant }: InputFormProps) {
    const [hasValue, setHasValue] = useState<boolean>(false);
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
                    onChange={(e) => setHasValue(e.target.value !== '')}
                />
            </div>
        </label>
    );
}
