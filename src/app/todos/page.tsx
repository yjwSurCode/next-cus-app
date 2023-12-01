'use client';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useSWR from 'swr';
import { getTodos, addTodo } from '@/api/todos/route';
import Link from 'next/link';

import styles from './page.module.scss';

// 预加载;
// export const fetchAsyncData = async (code: string) => {
//      const { data, mutate } = useSWR('/api/todos', getTodos);
// };

export type StatsByWeekResponse = Awaited<ReturnType<any>>;

export default function App() {
    const [text, setText] = useState('');
    const { data, mutate } = useSWR<StatsByWeekResponse, { error: string }>('/api/todos', getTodos);
    console.log('111', data);

    return (
        <div>
            <Toaster toastOptions={{ position: 'bottom-center' }} />
            <h1>Todos </h1>
            <Link href="/mail">
                <div>Link jump page mail</div>
            </Link>
            <form onSubmit={(ev) => ev.preventDefault()}>
                <input value={text} onChange={(e) => setText(e.target.value)} autoFocus />
                <button
                    type="submit"
                    onClick={async () => {
                        setText('');

                        const newTodo = {
                            id: Date.now(),
                            name: text,
                        };

                        try {
                            // Update the local state immediately and fire the
                            // request. Since the API will return the updated
                            // data, there is no need to start a new revalidation
                            // and we can directly populate the cache.
                            await mutate(addTodo(newTodo), {
                                optimisticData: [...data, newTodo],
                                rollbackOnError: true,
                                populateCache: true,
                                revalidate: false,
                            });
                            toast.success('Successfully added the new item.');
                        } catch (e) {
                            // If the API errors, the original data will be
                            // rolled back by SWR automatically.
                            toast.error('Failed to add the new item.');
                        }
                    }}
                >
                    Add
                </button>
            </form>
            <ul>
                {data
                    ? data.map((todo: any, index: number) => {
                          return (
                              <li key={index}>
                                  <div>
                                      {index}:{todo.name}
                                  </div>
                              </li>
                          );
                      })
                    : null}
            </ul>
        </div>
    );
}
