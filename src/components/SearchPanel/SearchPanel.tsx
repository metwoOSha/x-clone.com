'use client';

import { useState } from 'react';
import cls from './SearchPanel.module.css';

export default function SearchPanel() {
    const [input, setInput] = useState('');
    return (
        <form>
            <div className={cls.search}>
                <div className={cls.searchIcon}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        width="16"
                        height="16"
                    >
                        <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" />
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder="Search"
                    className={cls.input}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                {input && (
                    <div className={cls.closeBtnIcon}>
                        <button type="button" className={cls.closeBtn}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm3.71 12.54l-1.42 1.42-2.29-2.3-2.29 2.3-1.42-1.42 2.3-2.29-2.3-2.29 1.42-1.42 2.29 2.3 2.29-2.3 1.42 1.42-2.3 2.29 2.3 2.29z" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </form>
    );
}
