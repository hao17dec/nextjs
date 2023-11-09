import {PageInfo} from '@/app/_type/AccountServiceType';

export default function AccountServiceTopPc({pageInfo}: Readonly<{ pageInfo: PageInfo }>) {
    return (
        <>
            <h2>SP version {pageInfo.name}</h2>
            <div>
                Content : <p dangerouslySetInnerHTML={{__html: pageInfo.content}}/>
            </div>
        </>
    );
}

