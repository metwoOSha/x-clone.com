import TopTabs from '@/components/TopTabs/TopTabs';
import cls from './HomePage.module.css';
import SearchPanel from '@/components/SearchPanel/SearchPanel';
import Button from '@/components/Button/Button';
import WhoToFollow from '@/components/WhoToFollow/WhoToFollow';

export default function HomePage() {
    return (
        <div className={cls.wrapper}>
            <section className={cls.mainSection}>
                <TopTabs />
            </section>
            <aside className={cls.aside}>
                <SearchPanel />
                <Button type="follow" />
                <Button type="following" />
                <Button type="edit" />
                <Button type="post" disabled={false} />
                <WhoToFollow />
            </aside>
        </div>
    );
}
