import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";

import StyledComponentsRegistry from '../lib/AntdRegistry';


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
        <main className={styles.main}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </main>

        <footer>
            <div className={styles.grid}>
                <Link
                    href="/demo"
                    className={styles.card}
                    rel="noopener noreferrer"
                >
                    <h2>
                        Demo Page <span>-&gt;</span>
                    </h2>
                    <p>
                        Instantly deploy your Next.js site to a shareable URL with Vercel.

                    </p>
                </Link>
            </div>
        </footer>
        </body>
        </html>
    )
}
