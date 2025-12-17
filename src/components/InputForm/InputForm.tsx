'use client';

import { useState } from 'react';
import cls from './InputForm.module.css';

export default function InputForm() {
    const [hasValue, setHasValue] = useState<boolean>(false);
    return (
        <label className={cls.label} htmlFor="login-input">
            <div className={`${cls.placeholder} ${hasValue ? cls.active : ''}`}>
                <span>Phone, email, or username</span>
            </div>
            <div className={cls.input}>
                <input
                    id="login-input"
                    type="text"
                    onChange={(e) => setHasValue(e.target.value !== '')}
                />
            </div>
        </label>
    );
}
