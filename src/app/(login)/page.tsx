import Image from 'next/image';

import Button from '@/components/Button/Button';
import cls from './LoginPage.module.css';

export default function MainLoginPage() {
    return (
        <div className={cls.main}>
            <div className={cls.flex}>
                <div className={cls.wrapper}>
                    <div className={cls.logo}>
                        <div className={cls.logoBlock}>
                            <Image
                                src="/icons/x-com.svg"
                                alt="google icon"
                                width={0}
                                height={0}
                                style={{ height: '100%', width: '100%' }}
                            />
                        </div>
                    </div>
                    <div className={cls.loginWrapper}>
                        <div className={cls.loginBlock}>
                            <div className={cls.loginTitle}>
                                <span>Happening now</span>
                            </div>
                            <div className={cls.loginSubtitle}>
                                <span>Join today.</span>
                            </div>
                            <div className={cls.loginButton}>
                                <div style={{ marginBottom: '16px' }}>
                                    <Button variant="social">
                                        <div className={cls.socialLogin}>
                                            <span style={{ marginRight: '8px' }}>
                                                <Image
                                                    src="/icons/google.svg"
                                                    alt="google icon"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>

                                            <span className={cls.google}>Sign up with Google</span>
                                        </div>
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="social">
                                        <div className={cls.socialLogin}>
                                            <span style={{ marginRight: '8px' }}>
                                                <Image
                                                    src="/icons/github.svg"
                                                    alt="google icon"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span className={cls.github}>Sign up with Github</span>
                                        </div>
                                    </Button>
                                </div>
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
                                <div className={cls.createButton}>
                                    <Button variant="social">
                                        <span className={cls.create}>Create account</span>
                                    </Button>
                                </div>
                                <div className={cls.signIn}>
                                    <div className={cls.signInTitle}>
                                        <span>Already have an account?</span>
                                    </div>
                                    <Button variant="social-black">Sign In</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className={cls.nav}>footer</nav>
            </div>
        </div>
    );
}
