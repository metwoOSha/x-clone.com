import LoginFormHeader from '@/components/LoginFormHeader/LoginFormHeader';
import cls from './SignUp.module.css';
import Button from '@/components/Button/Button';
import InputForm from '@/components/InputForm/InputForm';
import SelectDate from '@/components/SelectDate/SelectDate';

export default function SignUpPage() {
    return (
        <div className={cls.signUp}>
            <div className={cls.signUpBlock}>
                <div>
                    <LoginFormHeader />
                </div>
                <div className={cls.signUpForm}>
                    <div className={cls.signUpFormInput}>
                        <div className={cls.titleForm}>
                            <span>Create your account</span>
                        </div>
                        <div className={cls.inputForm}>
                            <InputForm variant="name" />
                        </div>
                        <div className={cls.inputForm}>
                            <InputForm variant="email" />
                        </div>
                    </div>
                    <div className={cls.signUpDate}>
                        <div className={cls.signUpDateTitle}>
                            <span>Date of birth</span>
                        </div>
                        <div className={cls.signUpDateSubtitle}>
                            <span>
                                This will not be shown publicly. Confirm your
                                own age, even if this account is for a business,
                                a pet, or something else.
                            </span>
                        </div>
                        <div className={cls.dateForm}>
                            <div className={cls.month}>
                                <SelectDate variant="month" />
                            </div>
                            <div className={cls.day}>
                                <SelectDate variant="day" />
                            </div>
                            <div className={cls.year}>
                                <SelectDate variant="year" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cls.signUpBtn}>
                    <Button variant="large" disabled>Next</Button>
                </div>
            </div>
        </div>
    );
}
