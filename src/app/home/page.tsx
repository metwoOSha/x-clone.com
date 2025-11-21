import cls from './HomePage.module.css';

export default function HomePage() {
    return (
        <div className={cls.wrapper}>
            <section className={cls.mainSection}>Home</section>
            <aside className={cls.aside}>aside</aside>
        </div>
    );
}
