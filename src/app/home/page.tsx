import TopTabs from '@/components/TopTabs/TopTabs';
import cls from './HomePage.module.css';
import SearchPanel from '@/components/SearchPanel/SearchPanel';

export default function HomePage() {
    return (
        <div className={cls.wrapper}>
            <section className={cls.mainSection}>
                <TopTabs />
            </section>
            <aside className={cls.aside}>
                <SearchPanel />
            </aside>
        </div>
    );
}
