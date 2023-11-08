import styles from '@/app/style/next-js-default-style.module.scss'
import {Button} from "antd";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.csCenter}>
            <div className={styles.description}>
                <p>
                    In NextJS there are many ways to create a layout, and Layout can be diff by grouped routes . This is
                    the
                    default
                    layout.

                    If you click the button below, you will be <b>full-reloaded</b> and go to the account service top
                    page, it happen because 2 layout are different.
                </p>
            </div>

            <Button type="primary">
                <Link href="/account-service-top">
                    Click to go to account service top
                </Link>
            </Button>
        </div>
    )
}
