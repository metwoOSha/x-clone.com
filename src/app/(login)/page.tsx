import cls from './LoginPage.module.css';

export default function LoginPage() {
    return (
        <main className={cls.main}>
            <div className={cls.flex}>
                <div className={cls.wrapper}>
                    <div className={cls.logoBlock}>logo</div>
                    <div className={cls.loginWrapper}>
                        <div className={cls.loginBlock}>
                            <div className={cls.loginTitle}>
                                <span>Happening now</span>
                            </div>
                            <div className={cls.loginSubtitle}>
                                <span>Join today.</span>
                            </div>
                            <div></div>
                            <div></div>
                            <div className={cls.orLine}>
                                <div className={cls.orLineFlex}>
                                    <div className={cls.lineBlock}>
                                        <div className={cls.line}></div>
                                    </div>
                                    <div className={cls.or}>
                                        <span>OR</span>
                                    </div>
                                    <div className={cls.lineBlock}>
                                        <div className={cls.line}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className={cls.nav}>footer</nav>
            </div>
        </main>
    );
}
