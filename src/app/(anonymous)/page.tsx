import {Button, Col, ConfigProvider, Row} from 'antd';
import theme from '@/theme/themeConfig';
import Link from "next/link";

export default function Home() {
    return (
        <ConfigProvider theme={theme}>
            <Row>
                <Col span={24}>
                    <Button type="primary">
                        <Link href="/account-service-top">
                            Click to go to account service top
                        </Link>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    If when you click the button above, the page will be full-reloaded, because anonymous layout is
                    different with who_sale layout.
                </Col>

            </Row>

        </ConfigProvider>
    )
}
