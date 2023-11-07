// import type {NextApiRequest, NextApiResponse} from 'next'
//
// type ResponseData = {
//     message: string,
//     data?: any
// }
// type BreadCrumb = {
//     name: string,
//     href: string
// }
//
// export async function GET(req: NextApiRequest,
//                           {params}: { params: { slug: string } }
// ) {
//     console.log('Api call account-service-top-page-info')
//     //get page name from request
//     const slug = params.slug
//     let breadcrumb: BreadCrumb[] = [
//         {name: 'Home', href: '/'},
//     ]
//     if (slug && slug != '') {
//         let $pageBreadCrumb: BreadCrumb = {name: slug, href: `/${slug}`}
//         breadcrumb.push($pageBreadCrumb)
//     }
//     let data = {
//         breadcrumb: breadcrumb,
//         title: 'This is title from page' + slug,
//         description: 'This is description from API ' + slug,
//         page: slug,
//         content: `<div class="p-4 bg-white shadow-md rounded-md"> ${parentLink.name} Child ${i} </div>`
//     }
//
//     let dataResponse: ResponseData = {
//         message: 'Hello from Next.js!',
//         data: data
//
//     }
//
//     return Response.json(dataResponse)
// }