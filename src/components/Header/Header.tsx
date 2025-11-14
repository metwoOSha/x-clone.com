import Image from 'next/image';
import cls from './Header.module.css';

import { nav } from './header.data';

export function Header() {
    return (
        <div className={cls.flex}>
            <div className={cls.logo}>
                <Image src="/icons/x-com.svg" alt="x-icon" width={24} height={24} />
            </div>
            <nav className={cls.navFlex}>
                {nav.map((item) => (
                    <div key={item.id} className={cls.navBlock}>
                        <div className={cls.navSpan}>
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={item.width}
                                height={item.height}
                            />
                            <span className={cls.navText}>{item.title}</span>
                        </div>
                    </div>
                ))}
            </nav>
        </div>
    );
}
