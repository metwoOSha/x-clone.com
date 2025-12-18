'use client';

import LoginFormHeader from '@/components/LoginFormHeader/LoginFormHeader';
import cls from './SignIn.module.css';
import Button from '@/components/Button/Button';
import OrLine from '@/components/OrLine/OrLine';
import InputForm from '@/components/InputForm/InputForm';
import { useState } from 'react';
import { useXStore } from '@/lib/zustand/store/useStote';

export default function SignInPage() {
    const [step, setStep] = useState<'email' | 'password'>('email');

    const signInEmail = useXStore((state) => state.signInEmail);
    const signInSetEmail = useXStore((state) => state.signInSetEmail);

    function handleNext() {
        if (signInEmail) {
            setStep('password');
        }
    }

    return (
        <div className={cls.signIn}>
            <div className={cls.signInBlock}>
                <div>
                    <LoginFormHeader />
                </div>
                {step === 'email' && (
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
                            <div className={cls.inputForm}>
                                <InputForm
                                    value={signInEmail}
                                    variant="email"
                                    onValueChange={signInSetEmail}
                                />
                            </div>
                            <div className={cls.btnForm}>
                                <Button
                                    variant="social"
                                    onClick={handleNext}
                                    disabled={signInEmail ? false : true}
                                    type="button"
                                >
                                    <span className={cls.create}>Next</span>
                                </Button>
                            </div>
                            <div className={cls.btnForm}>
                                <Button variant="social-black">
                                    <span className={cls.create}>
                                        Forgot password?
                                    </span>
                                </Button>
                            </div>
                            <div className={cls.signUp}>
                                <span className={cls.signUpText}>
                                    Don&apos;t have an account?{' '}
                                    <button className={cls.signUpBtn}>
                                        Sign up
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
