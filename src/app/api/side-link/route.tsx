import {TreeLink} from "@/app/objects/TreeLink";

async function treeLinkGenerate(slug: string | null) {
    let parentLinks: TreeLink[] = [
        {
            name: 'ご注文について',
            href: '/account-service-top/service-1',
            children: [
                {
                    name: '注文・配送状況確認',
                    href: '/account-service-top/service-11',
                    content: '注文・配送状況確認',
                },
                {
                    name: '購入履歴',
                    href: '/account-service-top/service-12',
                    content: '購入履歴',
                },
                {
                    name: '欲しいものリスト・入荷お知らせリストについて',
                    href: '/account-service-top/service-13',
                    content: '欲しいものリスト・入荷お知らせリストについて',
                },
                {
                    name: '注文についてのお問い合わせ',
                    href: '/account-service-top/service-14',
                    content: '注文についてのお問い合わせ',
                },
                {
                    name: 'ご注文の流れ',
                    href: '/account-service-top/service-15',
                    content: 'ご注文の流れ',
                },
                {
                    name: 'お支払い方法',
                    href: '/account-service-top/service-16',
                    content: 'お支払い方法',
                },
                {
                    name: '掛払いご請求明細',
                    href: '/account-service-top/service-17',
                    content: '掛払いご請求明細',
                },
                {
                    name: '納期について',
                    href: '/account-service-top/service-18',
                    content: '納期について',
                },
                {
                    name: '深夜・早朝お届けサービス対象エリア',
                    href: '/account-service-top/service-19',
                    content: '深夜・早朝お届けサービス対象エリア',
                },
                {
                    name: '深夜・早朝お届けサービス対象エリア',
                    href: '/account-service-top/service-111',
                    content: '深夜・早朝お届けサービス対象エリア',
                },
                {
                    name: '配送・送料について',
                    href: '/account-service-top/service-112',
                    content: '配送・送料について',
                },
                {
                    name: '卸価格非表示モード　ご利用方法',
                    href: '/account-service-top/service-113',
                    content: '卸価格非表示モード　ご利用方法',
                },
                {
                    name: '電子署名対応について',
                    href: '/account-service-top/service-114',
                    content: '電子署名対応について',
                },
                {
                    name: '電子署名待ち商品一覧',
                    href: '/account-service-top/service-115',
                    content: '電子署名待ち商品一覧',
                },
                {
                    name: 'キャンセル・返品交換について',
                    href: '/account-service-top/service-116',
                    content: 'キャンセル・返品交換について',
                },
                {
                    name: '保証・アフターケア',
                    href: '/account-service-top/service-117',
                    content: '保証・アフターケア',
                },
                {
                    name: '複数の注文をまとめる',
                    href: '/account-service-top/service-118',
                    content: '複数の注文をまとめる',
                },
                {
                    name: 'ご注文を分割する',
                    href: '/account-service-top/service-119',
                    content: 'ご注文を分割する',
                },
                {
                    name: 'インボイス制度対応について',
                    href: '/account-service-top/service-120',
                    content: 'インボイス制度対応について',
                }

            ]
        },
        {
            name: 'お見積り・お問い合わせ窓口',
            href: '/account-service-top/service-200',
            children: [
                {
                    name: 'お見積一覧',
                    href: '/account-service-top/service-201',
                    content: 'お問い合わせ履歴',
                },
                {
                    name: 'お問い合わせ履歴',
                    href: '/account-service-top/service-202',
                    content: 'お問い合わせ履歴',
                },
                {
                    name: '純正部品のお見積り',
                    href: '/account-service-top/service-202',
                    content: '純正部品のお見積り',
                },
                {
                    name: '未掲載商品のお問い合わせ',
                    href: '/account-service-top/service-203',
                    content: '未掲載商品のお問い合わせ',
                },
                {
                    name: 'ご意見・ご要望',
                    href: '/account-service-top/service-204',
                    content: 'ご意見・ご要望',
                },
                {
                    name: '営業日案内',
                    href: '/account-service-top/service-205',
                    content: '営業日案内',
                },
            ]
        },
        {
            name: '特典プログラムについて',
            href: '/account-service-top/service-300',
            children: [
                {
                    name: 'Webike Biz パートナープログラムについて',
                    href: '/account-service-top/service-301',
                    content: 'Webike Biz パートナープログラムについて',
                }
            ]
        },
        {
            name: 'ウェビックポイントについて',
            href: '/account-service-top/service-400',
            children: [
                {
                    name: 'ウェビックポイントについて',
                    href: '/account-service-top/service-401',
                    content: '特典プログラムについて',
                },
                {
                    name: 'ポイントの使い方',
                    href: '/account-service-top/service-402',
                    content: 'ポイントの使い方',
                },
                {
                    name: 'ポイントの確認',
                    href: '/account-service-top/service-403',
                    content: 'ポイントの確認',
                }
            ]
        },
        {
            name: '規約',
            href: '/account-service-top/service-500',
            children: [
                {
                    name: '問屋規約',
                    href: '/account-service-top/service-501',
                    content: '問屋規約',
                },
                {
                    name: 'ポイント規約',
                    href: '/account-service-top/service-502',
                    content: 'ポイント規約',
                },
                {
                    name: '掛払取引規約',
                    href: '/account-service-top/service-503',
                    content: '掛払取引規約',
                },
                {
                    name: '車体物件検索サービス 利用規約',
                    href: '/account-service-top/service-504',
                    content: '車体物件検索サービス 利用規約',
                },
                {
                    name: 'モトセールス規約',
                    href: '/account-service-top/service-505',
                    content: 'モトセールス規約',
                }
            ]
        },
        {
            name: 'Service 4',
            href: '/account-service-top/service-4'
        }
    ]
    parentLinks.push({
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
        parentLinks.forEach((treeLink: TreeLink) => {

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
    return parentLinks;
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