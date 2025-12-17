import Image from 'next/image';

import cls from './LoginFormHeader.module.css';

export default function LoginFormHeader() {
    return (
        <div className={cls.LoginFormHeader}>
            <div className={cls.leftBlock}>
                <button className={cls.closeBtn}>
                    <Image src="/icons/close.svg" alt="close-button" width={20} height={20} />
                </button>
            </div>
            <div className={cls.logo}>
                <Image src="/icons/x-com.svg" alt="logo" width={28} height={28} />
            </div>
            <div className={cls.rightBlock}></div>
        </div>
    );
}
