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
                <Button variant="follow" />
                <Button variant="following" />
                <Button variant="edit" />
                <Button variant="post" disabled={false} />
                <WhoToFollow />
            </aside>
        </div>
    );
}
