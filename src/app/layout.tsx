import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';
import cls from './layout.module.css';
import Sidebar from '@/components/Sidebar/Sidebar';

const chirpFont = localFont({
    src: [
        {
            path: './fonts/Chirp-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/Chirp-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/Chirp-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
});

export const metadata: Metadata = {
    title: 'Clone x.com',
    description: 'Pet project by metwoO',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${chirpFont.className} `}>
                <div className={cls.grid}>
                    <header className={cls.sidebarLeft}>
                        <Sidebar />
                    </header>
                    <main className={cls.main}>{children}</main>
                    <aside className={cls.sidebarRight}>aside2</aside>
                </div>
            </body>
        </html>
    );
}
