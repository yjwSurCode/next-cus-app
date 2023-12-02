import React from 'react';
import { Card, CardFooter, Image, Button } from '@nextui-org/react';
import { useEffect,useState } from 'react';
import { postData } from '@/utils/request';
import { Header } from '@/app/(default)/home/Header';



export default function App({ id }: { id: any }) {
    console.log(id, 'id');

    const [shopInfo,setShopInfo]= useState<any>({})

    // const aa = async () => {
    //     const res = await fetchShopInfo(id);
    //     return res;
    // };

    const fetchShopInfo = async (code: string) => {
    // const params = useSearchParams();
    console.log(code, 'code');
    try {
        const res = await postData('https://devapi.666visa.cn/openvisa/product_query', {
            product_id: Number(code),
        }).then((res)=>{
         setShopInfo(res.body)
        });
        console.log(res, 'code 1111');
        // const data: { data: any[] } = await res.json();
        return res;
    } catch (err) {
        console.error(err, 'err');
    }
};

    useEffect(() => {
         fetchShopInfo(id);
        // console.log(body,'body')
        // setShopInfo(body)
    }, [id]);

    return (
        <main>
        <Header />
            <div className="h-screen w-full px-6 md:px-12 pb-12 pt-32 flex flex-wrap justify-between">
                <div
                    className="bg-gray-lighter md:h-full w-full md:flex-1 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1474376962954-d8a681cc53b2?w=1200')`,
                    }}
                ></div>

                <div className="bg-orange-100 text-orange-900 md:h-full w-full md:flex-1 flex justify-center items-center">
                    <div className="px-8 md:px-16">
                        <h1 className="text-lg md:text-3xl mb-6">{shopInfo&&shopInfo.product_name}</h1>
                        <p className="mb-6">
                            <span className="font-bold">日期：{shopInfo&&shopInfo.stay_duration_unit}</span> |{' '}
                            <span className="opacity-75 ">{shopInfo&&shopInfo.entry_count_unit}</span>
                        </p>
                        <p className="mb-6 leading-normal text-sm md:text-base">
                            
                            <a href="#more" className="text-black text-sm">
                                Read More
                            </a>
                        </p>
                        <a
                            href="#"
                            className="block md:inline-block text-center no-underline text-orange-900 px-5 py-3 border-2 border-orange-900 hover:bg-orange-900 hover:text-orange-100"
                        >
                            办理
                        </a>
                    </div>
                </div>
            </div>

            <div className="p-12" id="more">
                <h2 className="text-2xl md:text-4xl max-w-2xl mx-auto text-center text-gray-900 leading-normal mb-12">
                   办证流程
                </h2>
                <p className="text-sm md:text-base leading-normal max-w-xl text-center mx-auto text-gray-800 mb-8">
                {shopInfo&&shopInfo?.handle_process}
                </p>
            <h2 className="text-2xl md:text-4xl max-w-2xl mx-auto text-center text-gray-900 leading-normal mb-12">
                    注意事项
                </h2>
                <p className="text-sm md:text-base leading-normal max-w-xl text-center mx-auto text-gray-800">
                   {shopInfo&&shopInfo?.reminder}
                </p>
            </div>

            <div className="px-6 py-12 md:px-12">
                <div className="text-sm w-full p-12 text-center bg-blue-100 text-blue-900">
                    Copyright &copy; 2019 Exultant Collective
                </div>
            </div>
        </main>
    );
}
