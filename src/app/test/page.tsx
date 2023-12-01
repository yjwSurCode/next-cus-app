'use client';
import Image from 'next/image';
import Link from 'next/link';
// import {useClient, useSearchParams } from 'next/navigation';
import {usePathname, useSearchParams, useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
// import {useRouter} from 'next/router';
export default function Test() {
  const router = useRouter();
  // const client = useClient();
  //   if (!client) {
  //     return null; // 在服务器端渲染时返回null，确保不调用客户端特定的代码
  //   }
  const params = useSearchParams();
  const  Pathname = usePathname();
  console.log(Pathname, 'Pathname', params.getAll('name'));
  console.log(params, params.values(), params.toString(), 'params');
  console.log(router, 'router');
  console.log(router, 'router');
  console.log(NextResponse, 'NextResponse');
  const selectedTab = params.get('tab') || 'planned';

  const handleJumpMain = () => {
    router.push('/profile', {
      id: { name: '123' },
    });
  };

  // useClient是Next.js提供的一个自定义钩子，用于在函数组件中获取客户端的上下文。它的作用是在服务器端渲染时避免调用客户端特定的代码，以免产生错误或不一致的行为。
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>test</div>

      <div onClick={handleJumpMain}>jump page</div>

      <Link href="/profile?id=1">
        <div>Link jump page</div>
      </Link>
    </main>
  );
}
