'use client';

import React from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs/lib';

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
    const [cache] = React.useState(() => createCache());

    useServerInsertedHTML(() => (
        <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}></style>
    ));

    return <StyleProvider cache={cache}>{children}</StyleProvider>;
}