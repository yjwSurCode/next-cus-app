// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// // import { useRouter } from 'next/navigation';
// import { cookies } from 'next/headers'
// export default function Page() {
//   const router = useRouter();

//   const cookieStore = cookies()
//   const session = cookieStore.get('session')
//   console.log(session,'session')

//   const handleJump = () => {
//     router.push('/test', { scroll: false, name: '黑' });
//   };

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div>
//         app
//         <Link href="/test">
//           <div>link 跳转到test</div>
//         </Link>

//          <Link href={{ pathname: '/test', query: { name: '黑' } }}>
//           <div>link query 跳转到test</div>
//         </Link>
//         <div onClick={handleJump}>handleJump跳转到test</div>
//       </div>
//     </main>
//   );
// }


import React from 'react';
import { GmailProvider } from '@/providers/GmailProvider';
import { SessionProvider } from '@/providers/SessionProvider';
import { SWRProvider } from '@/providers/SWRProvider';


// Type error: Page "src/app/initPage/page.tsx" has an invalid "default" export:
//   Type "{ children: ReactNode; }" is not valid.

// export default function Providers(props: { children: React.ReactNode }) {
//   return (
//     <SWRProvider>
//       {props.children}
//       <div>213--page</div>
//       {/* <GmailProvider>
//         <SessionProvider>{props.children}</SessionProvider>
//       </GmailProvider> */}
//     </SWRProvider>
//   );
// }

export default function Providers() {
  return (
          <div>213--initPage</div>
  );
}
