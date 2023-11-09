//get remove domain and get information from slug
import type {Metadata, ResolvingMetadata} from 'next'
import {utilServerSideDeviceDetection} from "@/app/lib/UtilServerSideDeviceDetection";
import AccountServiceTopPc from "@/app/(who_sale)/account-service-top/[slug]/_component/AccountServiceTopPc";
import AccountServiceTopSp from "@/app/(who_sale)/account-service-top/[slug]/_component/AccountServiceTopSp";
import {PageInfo} from "@/app/_type/AccountServiceType";

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
let getPageInfoFromSlug = async (slug: string | null) => {
    if (slug && slug != '') {
        let slugEncoded: string = encodeURIComponent(slug)

        //fetch data from slug
        let res = await fetch(`http://localhost:3000/api/side-link?slug=${slugEncoded}`)
        let data = await res.json()
        return data.data ?? []
    }
}

export async function generateMetadata(
    {params}: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const slug = params.slug

    // fetch data
    const pathname = '/account-service-top/' + slug;
    const data = await getPageInfoFromSlug(pathname);

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images ?? []
    return {
        title: data.name ?? '',
        openGraph: {
            images: ['/some-specific-page-image.jpg', ...previousImages],
        },
    }
}

export default async function AccountSerViceDetailPage({params, searchParams,}: Readonly<{
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}>) {
    let pageInfo: PageInfo = {
        "name": "",
        "content": ""
    };
    const {isMobile} = utilServerSideDeviceDetection(searchParams)

    if (params.slug) {
        const pathname = '/account-service-top/' + params.slug
        pageInfo = await getPageInfoFromSlug(pathname)
    }
    return (<>
        {
            isMobile ? AccountServiceTopSp({pageInfo}) : AccountServiceTopPc({pageInfo})
        }
    </>)
}