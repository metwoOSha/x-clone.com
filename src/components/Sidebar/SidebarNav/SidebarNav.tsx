import Image from 'next/image';
import cls from './SidebarNav.module.css';

import { nav } from './SidebarNav.data';
import Link from 'next/link';

export default function SidebarNav() {
    return (
        <div className={cls.flex}>
            <div className={cls.logoBlock}>
                <div className={cls.logo}>
                    <svg viewBox="0 0 24 24">
                        <g>
                            <path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path>
                        </g>
                    </svg>
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
