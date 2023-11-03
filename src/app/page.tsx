import styles from './page.module.css'
import {Button, ConfigProvider} from 'antd';
import theme from '@/theme/themeConfig';

export default function Home() {
    return (
        <ConfigProvider theme={theme}>
            <div className={styles.center}>
                <div>Demo page</div>
                <Button type="primary">Button</Button>
            </div>
        </ConfigProvider>
    )
}
