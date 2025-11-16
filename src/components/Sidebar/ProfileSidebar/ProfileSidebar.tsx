import Image from 'next/image';

import cls from './ProfileSidebar.module.css';

export default function ProfileSidebar() {
    return (
        <button className={cls.profileBtn}>
            <div>
                <Image src="/icons/avatar.svg" alt="avatar" width={40} height={40} />
            </div>
            <div>
                <div className={cls.nicknameBlock}>
                    <span className={cls.name}>metwoO</span>
                    <span className={cls.nickname}>@metwoOSha</span>
                </div>
            </div>
            <div className={cls.dotsBlock}>
                <Image src="/icons/dots.svg" alt="dots" width={15} height={4} />
            </div>
        </button>
    );
}
