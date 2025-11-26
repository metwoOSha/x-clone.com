import Image from 'next/image';
import Link from 'next/link';
import cls from './WhoToFollow.module.css';

export default function WhoToFollow() {
    return (
        <div className={cls.follow}>
            <aside className={cls.section}>
                <div className={cls.title}>
                    <h2>Who to follow</h2>
                </div>
                <ul className={cls.list}>
                    <li className={cls.item}>
                        <div>
                            <Image
                                src="/icons/avatar.svg"
                                alt="icon"
                                width={40}
                                height={40}
                                className={cls.img}
                            />
                            <div className={cls.profileName}>
                                <div>
                                    <span></span>
                                </div>
                                <div>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={cls.item}>123</li>
                    <li className={cls.item}>123</li>
                </ul>
                <Link href="#" className={cls.link}>
                    Show more
                </Link>
            </aside>
        </div>
    );
}
