import { notFound } from 'next/navigation';
import LoginButton from './loginButton';

const fetchActiveGame = async (code: string) => {
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

export async function generateMetadata({ params }: { params: { code: string } }) {
    return {
        openGraph: {
            locale: 'en_US',
            type: 'website',
        },
        robots: {
            index: false,
            follow: false,
            nocache: true,
            noarchive: true,
        },
    };
}

export default async function Game({ params }: { params: { code: string } }) {
    const game = await fetchActiveGame(params.code);
    if (!game) {
        notFound();
    }

    return <LoginButton initContentList={game} />;
}
