// 'use client';
import { usePathname, useSearchParams } from 'next/navigation';

const fetchAsyncCodePage = async (code: string) => {
    // 启动服务才会更新
    console.log('render...');
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

export const getStaticPaths = async () => {
    return {
        paths: [
            {
                params: {
                    name: 'BoxyHQ',
                },
            }, // See the "paths" section below
        ],
        fallback: true, // false or "blocking"
    };
};

export default async function Code(context: any) {
    const result = await fetchAsyncCodePage(context.code);
    // const params = useSearchParams();
    // const Pathname = usePathname();
    // console.log(Pathname, 'params1', params.getAll('id'));
    // console.log(params, params.values(), params.toString(), 'params2');

    console.log('6666', context); //! { params: { code: '1' }, searchParams: {} }
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-xl">[code]---</div>
        </div>
    );
}
