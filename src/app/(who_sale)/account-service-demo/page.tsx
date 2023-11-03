import {Button, ConfigProvider} from 'antd';
import theme from "@/theme/themeConfig";

export default function AccountServiceTop() {
    return (
        <ConfigProvider theme={theme}>
            <section>
                <div>Page Demo Account service</div>
            </section>
        </ConfigProvider>
    )
}
