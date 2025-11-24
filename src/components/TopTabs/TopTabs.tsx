'use client';

import { useState } from 'react';
import cls from './TobTabs.module.css';
import cn from 'classnames';

export default function TopTabs() {
    const [active, setActive] = useState('for-you');
    return (
        <nav className={cls.tabs}>
            <button className={cls.btn} onClick={() => setActive('for-you')}>
                <div
                    className={cn(cls.block, {
                        [cls.active]: active === 'for-you',
                    })}
                >
                    <span>For you</span>
                    <div className={cls.line}></div>
                </div>
            </button>
            <button className={cls.btn} onClick={() => setActive('following')}>
                <div
                    className={cn(cls.block, {
                        [cls.active]: active === 'following',
                    })}
                >
                    <span>Following</span>
                    <div className={cls.line}></div>
                </div>
            </button>
        </nav>
    );
}
