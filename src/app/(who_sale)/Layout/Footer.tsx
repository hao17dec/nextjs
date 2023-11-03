"use client";

async function getData() {
    const res = await fetch('https://img.webike-cdn.net/sys_wp_footer/wp_footer_b_pc.html')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    return res.text()
}


export default async function Footer() {
    const data = await getData()
    return <article  className="text-container" dangerouslySetInnerHTML={{__html: data}}/>
};
