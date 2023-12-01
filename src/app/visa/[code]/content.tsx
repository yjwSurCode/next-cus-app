import React from 'react';
import { Card, CardFooter, Image, Button } from '@nextui-org/react';
import { useEffect } from 'react';
import { postData } from '@/utils/request';

const fetchShopInfo = async (code: string) => {
    // const params = useSearchParams();
    console.log(code, 'code');
    try {
        const res = await postData('https://devapi.666visa.cn/openvisa/product_query', {
            product_id: code,
        });
        console.log(res, 'code 1111');
        // const data: { data: any[] } = await res.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};

export default function App({ id }: { id: any }) {
    console.log(id, 'id');

    // const aa = async () => {
    //     const res = await fetchShopInfo(id);
    //     return res;
    // };

    useEffect(() => {
        // aa();
        fetchShopInfo(id);
    }, [id]);

    return (
        <Card isFooterBlurred radius="lg" className="border-none">
            <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="/images/hero-card.jpeg"
                width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                    className="text-tiny text-white bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                >
                    Notify me
                </Button>
            </CardFooter>
        </Card>
    );
}
