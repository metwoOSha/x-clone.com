import Image from 'next/image';
import cls from './SidebarNav.module.css';

import { nav } from './SidebarNav.data';
import Link from 'next/link';

export default function SidebarNav() {
    return (
        <div className={cls.flex}>
            <div className={cls.logoBlock}>
                <div className={cls.logo}>
                    <Image src="/icons/x-com.svg" alt="x-icon" width={24} height={24} />
                </div>
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
            <div className={cls.post}>
                <Link href="#" className={cls.link}>
                    <div className={cls.postBlock}>Post</div>
                </Link>
            </div>
        </div>
    );
}
