import {Inter} from 'next/font/google'
import '@/app/globals.css'
import React from "react";
import styles from "@/app/style/page.module.scss";

import StyledComponentsRegistry from '@/app/lib/AntdRegistry';
import Footer from "@/app/_components/Footer";
import NavBar from "@/app/_components/NavBar";
import {BannerTop} from "@/app/_components/BannerTop";
import {Metadata} from "next";
import Script from "next/script";


const inter = Inter({subsets: ['latin']})

//define metadata

export const metadata = {
    metadataBase: new URL('http://localhost:3000'),
    title: 'Research Next',
    description: 'This is research next description',
    openGraph: {
        title: 'Research Next',
        description: 'This is research next description',
    }
}
export default function RootLayout({children}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className={styles.banner}>
            <BannerTop></BannerTop>
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
