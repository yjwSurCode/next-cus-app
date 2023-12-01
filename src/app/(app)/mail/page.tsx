'use client';
import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';
import Link from 'next/link';
import { unstable_serialize } from 'swr'; // ✅ Available in server components
import { unstable_serialize as infinite_unstable_serialize } from 'swr/infinite'; // ✅ Available in server components

function Im() {
    const { data, isLoading, error } = useSWRImmutable(`http://106.12.154.161/images/json/dummy-backend.json`, {
        refreshInterval: 10,
    });

    return (
        <div>
            444
            <div>
                {data.data?.map((item: any) => {
                    return (
                        <div key={item.name}>
                            <div className="mt-4">
                                <div>111---{item.name}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// export type NoReplyResponse = Awaited<ReturnType<typeof getNoReply>>;
export default function Dashboard() {
    // mutate: [Function (anonymous)],
    // data: [Getter],
    // error: [Getter],
    // isValidating: [Getter],
    // isLoading: [Getter]

    //! 每隔一秒请求一次缓存数据
    const { data, error, isLoading } = useSWR('http://106.12.154.161/images/json/dummy-backend.json', fetcher, {
        refreshInterval: 1000,
    });

    //   const { data, isLoading, error } = useSWR<SendersResponse, { error: string }>(
    //   `/api/user/stats/senders?${new URLSearchParams(params as any)}`,
    //   {
    //     refreshInterval: props.refreshInterval,
    //   }
    // );

    console.log('777', data);

    // if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <ul>
            <Link href="/login">
                <div>Link jump page login</div>
            </Link>
            <Im />
            <div>mail title</div>

            {data.data?.map((item: any) => {
                return (
                    <div key={item.name}>
                        <div className="mt-4">
                            <div>222---{item.name}</div>
                        </div>
                    </div>
                );
            })}
        </ul>
    );
}
