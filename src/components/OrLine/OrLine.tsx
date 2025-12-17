import cls from './OrLine.module.css';

export default function OrLine() {
    return (
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
    );
}
