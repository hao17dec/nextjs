'use server';
import {headers} from 'next/headers'

export const utilServerSideDeviceDetection = (param: any) => {
    const headersList = headers()
    const userAgent = headersList.get('user-agent');
    const url = headersList.get('x-url');
    let isMobileView = !!RegExp(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i).exec(userAgent!);
    let isMobile = false;
    if (param?.ua != 'pc' || !param?.ua) {
        isMobile = param?.ua === 'sp' || isMobileView;
    }
    return {
        isMobile,
    }
}