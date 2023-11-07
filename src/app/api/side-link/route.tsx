import {TreeLink} from "@/app/objects/TreeLink";

async function treeLinkGenerate(slug: string | null) {
    let parentLinks = [
        {
            name: 'Service 1',
            href: '/account-service-top/service-1',
        },
        {
            name: 'Service 2',
            href: '/account-service-top/service-2'
        },
        {
            name: 'Service 3',
            href: '/account-service-top/service-3'
        },
        {
            name: 'Service 4',
            href: '/account-service-top/service-4'
        }
    ]
    let treeLinks: TreeLink[] = []
    parentLinks.forEach((parentLink) => {
        //list class color
        let colorList = ['red-1', 'green-2', 'blue-2', 'yellow-2', 'pink-2']
        //pick random color
        let randomColor = colorList[Math.floor(Math.random() * colorList.length)];


        let childLinks = []
        for (let i = 0; i < 5; i++) {
            childLinks.push({
                name: `${parentLink.name} Child ${i}`,
                href: `${parentLink.href}-child-${i}`,
                //random html content
                content: `<div class="p-4 ${randomColor} shadow-md rounded-md"> ${parentLink.name} Child ${i} description</div>`
            })
        }
        treeLinks.push({
            name: parentLink.name,
            href: parentLink.href,
            children: childLinks
        })
    });
    treeLinks.push({
        name: 'Account Service Demo',
        href: '/account-service-demo',
        children: [
            {
                name: 'Account Service Demo',
                href: '/account-service-demo',
            }
        ]
    })
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
        //delay 2s before return
        // await new Promise(r => setTimeout(r, 2000));
        return newTreeLinks;
    }

    //delay 2s before return
    // await new Promise(r => setTimeout(r, 200));
    return treeLinks;
}

export async function GET(request: Request) {
    console.log('Api call Side Link')

    const {searchParams} = new URL(request.url)
    const slug = searchParams.get('slug')
    let sideLinks = await treeLinkGenerate(slug);
    return Response.json({
        'data': sideLinks,
    })
}