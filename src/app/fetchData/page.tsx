// 'use client';
import { fetchArchivedGame } from '@/api/user/game';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import DataPage from './req_data';

import styles from './page.module.scss';


export default function Dashboard() {
  // const router = useRouter();
  // const [count, setCount] = useState(1);
  // const handleJumpMail = () => {
  //   router.push('/mail');
  // };

  return (
    <ul>
    <h1>title</h1>
      {/* <button onClick={() => setCount(count + 1)}>按钮{count}</button> */}
      {/* <div onClick={handleJumpMail}>jump page mail </div> */}
      
      {/* <Link href="/mail">
        <div>Link jump page</div>
      </Link> */}

      {/* //! 错误写法 不要async组件 嵌套 client组件 */}
      {/* <DataPage></DataPage> */}
    </ul>
  );
}
