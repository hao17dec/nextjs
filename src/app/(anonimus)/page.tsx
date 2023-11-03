import styles from '@/app/page.module.css'
import {Button, ConfigProvider} from 'antd';
import theme from '@/theme/themeConfig';
import Link from "next/link";

export default function Home() {
    return (
        <ConfigProvider theme={theme}>
            <div className={styles.center}>
                <Button type="primary">
                    <Link href="/account-service-top">
                        Click to go to account service top
                    </Link>
                </Button>
            </div>
        </ConfigProvider>
    )
}
