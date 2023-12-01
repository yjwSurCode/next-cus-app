'use client';
import Image from 'next/image';
// import {useClient, useSearchParams } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
// import Router from 'next/router';
export default function Index() {
  // const router = useRouter();
  // const client = useClient();
  //   if (!client) {
  //     return null; // 在服务器端渲染时返回null，确保不调用客户端特定的代码
  //   }
  const params = useSearchParams();
  const  Pathname = usePathname();
  console.log(Pathname, 'Pathname', params.getAll('name'));
  console.log(Pathname, 'params1', params.getAll('id'));
  console.log(params, params.values(), params.toString(), 'params2');
  // console.log(router, 'router');
  const selectedTab = params.get('tab') || 'planned';

  const handleJumpMain = () => {
    // Router.push('/');
  };

  // useClient是Next.js提供的一个自定义钩子，用于在函数组件中获取客户端e的上下文。它的作用是在服务器端渲染时避免调用客户端特定的代码，以免产生错误或不一致的行为。
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      detail---page
    </main>
  );
}
