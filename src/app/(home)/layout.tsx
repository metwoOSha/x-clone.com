import Sidebar from '@/components/Sidebar/Sidebar';

import cls from './layout.module.css';

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={cls.grid}>
            <header className={cls.sidebarLeft}>
                <Sidebar />
            </header>
            <main className={cls.main}>{children}</main>
        </div>
    );
}
