import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';
import cls from './layout.module.css'

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
                    <aside></aside>
                    <main>{children}</main>
                    <aside></aside>
                </div>
            </body>
        </html>
    );
}
