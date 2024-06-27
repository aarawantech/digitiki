'use client';

import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface Props {
    children: ReactNode;
}
const Providers = (props: Props) => (
    <SessionProvider>{props.children}</SessionProvider>
);

export default Providers;
