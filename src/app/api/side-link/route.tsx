import {NextApiRequest} from "next";
import {TreeLink} from "@/app/objects/TreeLink";

function treeLinkGenerate(slug: string | null) {
    let parentLinks = [
        {
            name: 'Page service demo',
            href: '/account-service-top/page-service-demo',
        },
        {
            name: 'Page service demo 2',
            href: '/account-service-top/page-service-demo-2'
        },
        {
            name: 'Page service demo 3',
            href: '/account-service-top/page-service-demo-3'
        },
        {
            name: 'Page service demo 4',
            href: '/account-service-top/page-service-demo-4'
        },
    ]
    let treeLinks: TreeLink[] = []
    parentLinks.forEach((parentLink) => {
        let childLinks = []
        for (let i = 0; i < 5; i++) {
            childLinks.push({
                name: `${parentLink.name} Child ${i}`,
                href: `${parentLink.href}-child-${i}`,
                //random html content
                content: `<div class="p-4 bg-white shadow-md rounded-md"> ${parentLink.name} Child ${i} </div>`
            })
        }
        treeLinks.push({
            name: parentLink.name,
            href: parentLink.href,
            children: childLinks
        })
    });
    //find slug in treeLinks
    if (slug && slug != '') {
        let newTreeLinks: TreeLink = {
            name: '',
            href: '',

        };
        treeLinks.forEach((treeLink: TreeLink) => {

            if (treeLink.href === slug) {
                newTreeLinks = treeLink
            }
            if (treeLink.children) {
                treeLink.children.forEach((childLink: TreeLink) => {
                    if (childLink.href === slug) {
                        newTreeLinks = childLink

                    }
                })
            }
        })
        return newTreeLinks;
    }


    return treeLinks;
}

export async function GET(request: Request) {
    console.log('Api call Side Link')

    const {searchParams} = new URL(request.url)
    const slug = searchParams.get('slug')
    let sideLinks = treeLinkGenerate(slug);
    return Response.json({
        'data': sideLinks,
    })
}