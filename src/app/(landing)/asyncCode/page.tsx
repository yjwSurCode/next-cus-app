import { notFound } from 'next/navigation';
import useSWR from 'swr';

const fetchAsyncCodePage = async (code: string) => {
    // 启动服务才会更新
    console.log('render...', code);
    try {
        //! revalidate 10  每隔10秒
        const res = await fetch(
            `http://106.12.154.161/images/json/dummy-backend.json`,
            // { cache: 'no-store', next: { revalidate: 5 } }
            { next: { revalidate: 10, tags: [] } },
        );
        const data: { data: any[] } = await res.json();

        // if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        //     throw new Error('Failed to fetch data');
        // }

        return data;
    } catch (err) {
        console.error(err);
    }
};

export default async function AsyncCodePage({ params }: { params: { fallback: any; code: string } }) {
    // const result = await fetchAsyncCodePage(params.code);
    const result = await fetchAsyncCodePage(params.code);
    if (!result) {
        notFound();
    }

    return (
        <div>
            {result.data?.map((item: any) => {
                return (
                    <div key={item.name}>
                        <div className="mt-4">
                            <div>123{item.name}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
