import {Inter} from 'next/font/google'
import '@/app/globals.css'
import React from "react";
import theme from "@/theme/themeConfig";
import {Button, Col, ConfigProvider, Row} from "antd";
import {TreeLink} from "@/app/objects/TreeLink";
import Link from "next/link";


const inter = Inter({subsets: ['latin']})

//define metadata
export const metadata = {
    title: 'Research Next',
    description: 'This is research next description',

}

function Tree(props: any) {
    return (
        <>
            <h2>{props.title}</h2>
            <ul>
                {props.childrenLink.map((child: TreeLink, i: any) => {
                    return <li key={i}>
                            <Link href={child.href}>
                                {child.name}
                            </Link>
                    </li>
                })}
            </ul>
        </>
    )
}

//fetch data from api
async function treeLinkGenerate() {
    let res = await fetch('http://localhost:3000/api/side-link')
    let data = await res.json()
    return data.data ?? []
}

export default async function AccountServiceTopLayout({children}: Readonly<{
    children: React.ReactNode
}>) {
    let data: [] = await treeLinkGenerate();

    return (
        <ConfigProvider theme={theme}>
            <Row>
                <Col span={12}>
                    {data.map((treeLink: TreeLink, i: any) => <Tree key={i} title={treeLink.name}
                                                                    childrenLink={treeLink.children}/>)}
                </Col>
                <Col span={12}>
                    <section>
                        <div>{children}</div>
                    </section>
                </Col>
            </Row>

        </ConfigProvider>
    )
}
