import Link from "next/link";
import React from "react";
import navBarStyles from '@/app/style/navbar.module.scss'

export default async function NavBar() {
    return <nav className={navBarStyles.wbNavbar}>
        <Link href="/">Home</Link> |
        <Link href={'/account-service-top'}>Account Service Top</Link> |
        <Link href={'/account-service-demo'}>Account</Link> |
        <Link href={'/remote-select'}>Remote Select</Link> |
        <Link href={"/parallel-routes"}>Parallel Routes & Intercepted Routes</Link>
    </nav>
}