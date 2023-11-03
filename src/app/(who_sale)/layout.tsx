import {Inter} from 'next/font/google'
import '@/app/globals.css'
import React from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";

import StyledComponentsRegistry from '@/lib/AntdRegistry';
import Footer from "@/app/(who_sale)/Layout/Footer";


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
            <p className={styles.description}>Account Service</p>
        </div>
        <nav className={styles.nav}>
            <Link href="/">Home</Link> |
            <Link href="/account-service-top">Account Service Top</Link> |
            <Link href="/account-service-demo">Account</Link>
        </nav>
        <div className={styles.banner}>
        </div>
        <main className={styles.main}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </main>
        <Footer></Footer>
        </body>
        </html>
    )
}
