'use client';
import { useState } from 'react';
import Link from 'next/link';

interface TypeContentList {
    data: any[];
}

export default function LoginButton({ initContentList }: { initContentList: TypeContentList }) {
    const [count, setCount] = useState(1);
    console.log(initContentList, 'loginButton page initContentList');
    return (
        <div className=" ">
            <h1 style={{ fontWeight: 'bold' }}>Login page</h1>
            <Link href="/mail">
                <div>Link jump page mail</div>
            </Link>
            <button onClick={() => setCount(count + 1)}>按钮{count}</button>
            {initContentList.data?.map((item: any) => {
                return (
                    <div key={item.name}>
                        <div className="mt-4">
                            <div>123{item.name}</div>
                        </div>
                    </div>
                );
            })}
            <div className=" ">
                <div className=" ">
                    <div className=" ">
                        <div className=" ">
                            <div className=" ">123</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
