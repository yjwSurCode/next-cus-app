// import { notFound } from 'next/navigation';
// import Content from './content';
// import { usePathname, useSearchParams } from 'next/navigation';
// import { postData } from '@/utils/request';

// const fetchShopInfo = async (code: string) => {
//     // const params = useSearchParams();
//     console.log(code,'code')
//     try {
//         const res = await postData('https://devapi.666visa.cn/openvisa/product_query', {
//             product_id: code,
//         });
//         console.log(res, 'code 1111');
//         // const data: { data: any[] } = await res.json();
//         return res;
//     } catch (err) {
//         console.error(err);
//     }
// };

// export async function generateMetadata({ params }: { params: { code: string } }) {
//     return {
//         openGraph: {
//             locale: 'en_US',
//             type: 'website',
//         },
//         robots: {
//             index: false,
//             follow: false,
//             nocache: true,
//             noarchive: true,
//         },
//     };
// }

// export default  function VisaShopDetailPage({ params }: { params: { code: string } }) {
//     console.log(params,'params')
//     const shopInfo = await fetchShopInfo(params.code);
//     console.log(shopInfo,'shopInfo')
//     if (!shopInfo) {
//         notFound();
//     }

//     return <Content shopInfo={shopInfo} />;
// }
