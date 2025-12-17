import LoginFormHeader from '@/components/LoginFormHeader/LoginFormHeader';
import cls from './SignIn.module.css';
import Button from '@/components/Button/Button';
import OrLine from '@/components/OrLine/OrLine';

export default function SignInPage() {
    return (
        <div className={cls.signIn}>
            <div className={cls.signInBlock}>
                <div>
                    <LoginFormHeader />
                </div>
                <div>
                    <div className={cls.formBlock}>
                        <div className={cls.titleForm}>
                            <span>Sign in to X</span>
                        </div>
                        <div className={cls.btnForm}>
                            <Button variant="social-google" />
                        </div>
                        <div className={cls.btnForm}>
                            <Button variant="social-github" />
                        </div>
                        <OrLine />
                        <div className={cls.btnForm}>
                            <Button variant="social">
                                <span className={cls.create}>Next</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
