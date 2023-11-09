import Link from "next/link";
import {utilServerSideDeviceDetection} from "@/app/lib/UtilServerSideDeviceDetection";

export default function UaLink({href, content}: Readonly<{
    href: string,
    content?: string,
}>) {
    const {isMobile} = utilServerSideDeviceDetection({})
    //convert href to URL and add ua=sp
    if (isMobile) {
        let url = new URL(href)
        url.searchParams.set('ua', 'sp')
        href = url.toString()
    }
    return (
        <Link href={href}>
            {content}
        </Link>
    );
}