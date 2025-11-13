import Image from 'next/image';

import cls from './Header.module.css';

export function Header() {
    return (
        <div className={cls.flex}>
            <div>
                <Image src="./x-com.svg" alt="x-icon" width={24} height={24} />
            </div>
            <nav className={cls.navFlex}>
                <div className={cls.navBlock}>
                    <Image src="./x-com.svg" alt="x-icon" />
                    <span className={cls.navText}>Home</span>
                </div>
                <div className={cls.navBlock}>
                    <Image src="./x-com.svg" alt="x-icon" />
                    <span className={cls.navText}>Explore</span>
                </div>
                <div className={cls.navBlock}>
                    <Image src="./x-com.svg" alt="x-icon" />
                    <span className={cls.navText}>Notifications</span>
                </div>
                <div className={cls.navBlock}>
                    <Image src="./x-com.svg" alt="x-icon" />
                    <span className={cls.navText}>Messages</span>
                </div>
                <div className={cls.navBlock}>
                    <Image src="./x-com.svg" alt="x-icon" />
                    <span className={cls.navText}>Lists</span>
                </div>
                <div className={cls.navBlock}>
                    <Image src="./x-com.svg" alt="x-icon" />
                    <span className={cls.navText}>Bookmarks</span>
                </div>
                <div className={cls.navBlock}>
                    <Image src="./x-com.svg" alt="x-icon" />
                    <span className={cls.navText}>Communities</span>
                </div>
                <div className={cls.navBlock}>
                    <Image src="./x-com.svg" alt="x-icon" />
                    <span className={cls.navText}>Verified Orgs</span>
                </div>
                <div className={cls.navBlock}>
                    <Image src="./x-com.svg" alt="x-icon" />
                    <span className={cls.navText}>Profile</span>
                </div>
                <div className={cls.navBlock}>
                    <Image src="./x-com.svg" alt="x-icon" />
                    <span className={cls.navText}>More</span>
                </div>
            </nav>
        </div>
    );
}
