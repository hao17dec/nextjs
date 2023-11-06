import {Inter} from 'next/font/google'
import '@/app/globals.css'
import React from "react";
import styles from "@/app/page.module.scss";

import StyledComponentsRegistry from '@/lib/AntdRegistry';
import Footer from "@/app/(who_sale)/Components/Footer";
import NavBar from "@/app/(who_sale)/Components/NavBar";


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
        </div>
        <NavBar></NavBar>
        <div className={styles.banner}>
        </div>
        <div className={styles.banner}>
        </div>
        <main className={styles.main}>
            <StyledComponentsRegistry>
                <div className={styles.container}>
                    {children}
                </div>
            </StyledComponentsRegistry>
        </main>
        <Footer></Footer>
        </body>
        </html>
    )
}
