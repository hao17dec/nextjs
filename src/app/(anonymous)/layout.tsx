import {Inter} from 'next/font/google'
import '@/app/globals.css'
import React from "react";
import styles from "@/app/style/page.module.scss";
import Link from "next/link";

import StyledComponentsRegistry from '@/app/lib/AntdRegistry';


const inter = Inter({subsets: ['latin']})

//define metadata
export const metadata = {
    title: 'Research Next',
    description: 'This is research next description',
}
export default function RootLayout({children}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className={styles.banner}>
            <p className={styles.description}> (Layout anonymous)</p>
        </div>
        <nav className={styles.nav}>
            <Link href="/">Home</Link>
        </nav>
        <main className={styles.main}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </main>
        <footer>
            This is footer
        </footer>
        </body>
        </html>
    )
}
