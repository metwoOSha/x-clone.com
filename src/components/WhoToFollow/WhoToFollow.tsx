import Image from 'next/image';
import Link from 'next/link';
import cls from './WhoToFollow.module.css';
import Button from '../Button/Button';

export default function WhoToFollow() {
    return (
        <div className={cls.follow}>
            <aside className={cls.section}>
                <div className={cls.title}>
                    <h2>Who to follow</h2>
                </div>
                <ul className={cls.list}>
                    <li className={cls.item}>
                        <div className={cls.flex}>
                            <Image
                                src="/icons/avatar.svg"
                                alt="icon"
                                width={40}
                                height={40}
                                className={cls.img}
                            />
                            <div className={cls.block}>
                                <div className={cls.profileName}>
                                    <div className={cls.nick}>
                                        <span>metwoO</span>
                                    </div>
                                    <div className={cls.nickname}>
                                        <span>@metwoOSha</span>
                                    </div>
                                </div>
                                <div className={cls.btn}>
                                    <Button variant="follow" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={cls.item}>
                        <div className={cls.flex}>
                            <Image
                                src="/icons/avatar.svg"
                                alt="icon"
                                width={40}
                                height={40}
                                className={cls.img}
                            />
                            <div className={cls.block}>
                                <div className={cls.profileName}>
                                    <div className={cls.nick}>
                                        <span>metwoO</span>
                                    </div>
                                    <div className={cls.nickname}>
                                        <span>@metwoOSha</span>
                                    </div>
                                </div>
                                <div className={cls.btn}>
                                    <Button variant="follow" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={cls.item}>
                        <div className={cls.flex}>
                            <Image
                                src="/icons/avatar.svg"
                                alt="icon"
                                width={40}
                                height={40}
                                className={cls.img}
                            />
                            <div className={cls.block}>
                                <div className={cls.profileName}>
                                    <div className={cls.nick}>
                                        <span>metwoO</span>
                                    </div>
                                    <div className={cls.nickname}>
                                        <span>@metwoOSha</span>
                                    </div>
                                </div>
                                <div className={cls.btn}>
                                    <Button variant="follow" />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <Link href="#" className={cls.link}>
                    Show more
                </Link>
            </aside>
        </div>
    );
}
