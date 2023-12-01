import React from 'react';
import { GmailProvider } from '@/providers/GmailProvider';
import { SessionProvider } from '@/providers/SessionProvider';
import { SWRProvider } from '@/providers/SWRProvider';

export default function Providers(props: { children: React.ReactNode }) {
  console.log(props, 'props');
  return (
    <SWRProvider>
      <SessionProvider>{props.children}</SessionProvider>
      55555
      {/* <GmailProvider>
        <SessionProvider>{props.children}</SessionProvider>
      </GmailProvider> */}
    </SWRProvider>
  );
}
