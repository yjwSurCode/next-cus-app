// import { notFound } from 'next/navigation';
// import useSWR, { SWRConfig } from 'swr';

// const fetchAsyncCodePage = async (code: string) => {
//     // 启动服务才会更新
//     console.log('render...');
//     try {
//         //! revalidate 10  每隔10秒
//         const res = await fetch(
//             `http://106.12.154.161/images/json/dummy-backend.json`,
//             // { cache: 'no-store', next: { revalidate: 5 } }
//             { next: { revalidate: 10, tags: [] } },
//         );
//         const data: { data: any[] } = await res.json();

//         // if (!res.ok) {
//         // This will activate the closest `error.js` Error Boundary
//         //     throw new Error('Failed to fetch data');
//         // }

//         return data;
//     } catch (err) {
//         console.error(err);
//     }
// };

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
// const API = 'https://api.github.com/repos/vercel/swr';

// async function getFetchServerSideProps() {
//     const repoInfo = await fetcher(API);
//     return {
//         props: {
//             fallback: {
//                 [API]: repoInfo,
//             },
//         },
//     };
// }

// function Repo() {
//     const { data, error } = useSWR(API);

//     // there should be no `undefined` state
//     console.log('Is data ready?', !!data);

//     if (error) return 'An error has occurred.';
//     if (!data) return 'Loading...';
//     return (
//         <div>
//             <h1>{data.name}</h1>
//             <p>{data.description}</p>
//             <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{' '}
//             <strong>🍴 {data.forks_count}</strong>
//         </div>
//     );
// }

// export default async function AsyncCodePage({ params }: { params: { fallback: any; code: string } }) {
//     const fallback = await getFetchServerSideProps();
//     // const result = await fetchAsyncCodePage(params.code);
//     const result = await fetchAsyncCodePage(params.code);
//     if (!result) {
//         notFound();
//     }

//     return (
//         <div>
//             <SWRConfig value={{ fallback: fallback }}>
//                 <Repo />
//             </SWRConfig>
//             {result.data?.map((item: any) => {
//                 return (
//                     <div key={item.name}>
//                         <div className="mt-4">
//                             <div>123{item.name}</div>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }
