//get remove domain and get information from slug
import type {Metadata, ResolvingMetadata} from 'next'

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
    {params, searchParams}: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.slug

    // fetch data
    const pathname = '/account-service-top/' + params.slug ?? null
    const data = await getPageInfoFromSlug(pathname);

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
    return {
        title: data.name ?? '',
        openGraph: {
            images: ['/some-specific-page-image.jpg', ...previousImages],
        },
    }
}

export default async function AccountSerViceDetailPage({params}: { params: { slug: string } }) {
    let pageInfo = {
        name: '',
        content: ''
    }

    if (params.slug) {
        const pathname = '/account-service-top/' + params.slug ?? null
        pageInfo = await getPageInfoFromSlug(pathname)
    }
    let content = pageInfo.content ?? '';
    return <>
        <h2>{pageInfo.name}</h2>
        <div>
            Content : <p dangerouslySetInnerHTML={{__html: content}}/>
        </div>

    </>
}