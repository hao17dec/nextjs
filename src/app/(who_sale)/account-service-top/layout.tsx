import {Inter} from 'next/font/google'
import '@/app/globals.css'
import React from "react";
import theme from "@/app/theme/themeConfig";
import {Col, ConfigProvider, Row} from "antd";
import {TreeLink} from "@/app/objects/TreeLink";
import Link from "next/link";
import styles from "@/app/style/layout.module.scss"
import UaLink from "@/app/_components/UaLink";


const inter = Inter({subsets: ['latin']})
function Tree(props: any) {
    return (
        <>
            <h3 className={styles.sideTitle}>{props.treeLink.name}</h3>
            <ul>
                {props.treeLink?.children?.map((child: TreeLink, i: any) => {
                    return <li key={i}>
                        <UaLink href={child.href} content={child.name}/>
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
            <Row justify={"space-between"}>
                <Col span={24} md={24} xl={5}>
                    <div className={styles.sideCol}>
                        <div className={styles.sideBox}>
                            {data.map((treeLink: TreeLink, i: any) => <Tree key={i} treeLink={treeLink}/>)}
                        </div>

                    </div>
                </Col>
                <Col span={24} md={24} xl={18}>
                    <section>
                        <div>{children}</div>
                    </section>
                </Col>
            </Row>

        </ConfigProvider>
    )
}
