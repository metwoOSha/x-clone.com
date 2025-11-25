import Image from 'next/image';

import cls from './SearchPanel.module.css';

export default function SearchPanel() {
    return (
        <form action="">
            <div className={cls.search}>
                <Image src="/search.svg" alt="search-icon" width={13} height={13} />
                <input type="text" placeholder="Search" className={cls.input} />
            </div>
        </form>
    );
}
