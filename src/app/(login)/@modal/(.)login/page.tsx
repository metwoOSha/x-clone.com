import cls from './LoginPage.module.css';

export default function LoginPage() {
    return (
        <div className={cls.login}>
            <div className={cls.backdrop}></div>
            <div className={cls.loginBlock}></div>
        </div>
    );
}
