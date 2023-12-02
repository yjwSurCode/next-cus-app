/* eslint-disable jsx-a11y/alt-text */
'use client';
import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';
import { unstable_serialize } from 'swr'; // ✅ Available in server components
import { unstable_serialize as infinite_unstable_serialize } from 'swr/infinite'; // ✅ Available in server components
import { useEffect, useState } from 'react';
import { Carousel, Col, Row, Statistic } from 'antd';
import { Card, CardHeader, CardBody, CardFooter, Input, Divider, Image } from '@nextui-org/react';
import { Header } from '@/app/(default)/home/Header';
import Link from 'next/link';
import { postData } from '@/utils/request';
import Content from '@/app/visa/content';
// import { useDispatch } from 'react-redux';
// import CountUp from 'react-countup';

import swiImg from '/public/images/qianzheng.png';

import styles from './visa-page.module.scss';

function Im() {
    const { data, isLoading, error } = useSWRImmutable(`http://106.12.154.161/images/json/dummy-backend.json`, {
        refreshInterval: 10,
    });

    if (!data) return <div>Loading...</div>;

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

// export type NoReplyResponse = Awaited<ReturnType<typeof getNoReply>>;
export default function Dashboard() {
    // mutate: [Function (anonymous)],
    // data: [Getter],
    // error: [Getter],
    // isValidating: [Getter],
    // isLoading: [Getter]
    //   const { data, isLoading, error, mutate } = useSWR(
    //     `https://devapi.666visa.cn/openvisa/product_brief_query`
    //   );

    // const dispatch = useDispatch();
    const [list, setList] = useState<{ total_count: number; data: any[] }>();

    useEffect(() => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Appid': 'dev',
            },
            body: JSON.stringify({}),
        };

        postData('https://devapi.666visa.cn/openvisa/product_brief_query', {
            country_name: '韩国',
            province_code: '110000',
        }).then((data) => {
            console.log(data, '999'); // JSON data parsed by `data.json()` call
            setList(data.body);
        });
    }, []);

    // if (error) return <div>Failed to load</div>;
    if (!list) return <div>Loading...</div>;

    function SearchBox() {
        return (
            <div className="min-h-screen bg-gray-100 flex justify-center items-center">
                <div className="container mx-auto bg-indigo-500 rounded-lg p-14">
                    <form>
                        <h1 className="text-center font-bold text-white text-4xl">搜索办签国家地区</h1>
                        <p className="mx-auto font-normal text-sm my-6 max-w-lg">
                            Enter your select domain name and choose any extension name in the next step (choose between
                            .com, .online, .tech, .site, .net, and more)
                        </p>
                        <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
                            <input
                                className="text-base text-gray-400 flex-grow outline-none px-2 "
                                type="text"
                                placeholder="Search your domain name"
                            />
                            <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                                {/* <select
                                    id="Com"
                                    className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg"
                                >
                                    <option value="com" selected>
                                        com
                                    </option>
                                    <option value="net">net</option>
                                    <option value="org">org</option>
                                    <option value="io">io</option>
                                </select> */}
                                <button className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    const SearchIcon = (props: any) => (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
            {...props}
        >
            <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path d="M22 22L20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
    );

    function RenderCarousel() {
        return (
            <Carousel autoplay>
                <div>
                    <h3 className={styles.CarouselStyle}>
                        <Image
                            style={{ opacity: 1 }}
                            alt="NextUI hero Image"
                            src={'https://o.666visa.cn/static/ssqpeer/homepage/homepage-1.png'}
                        ></Image>
                    </h3>
                </div>
                <div>
                   <Image
                            style={{ opacity: 1 }}
                            alt="NextUI hero Image"
                            src={'https://o.666visa.cn/static/ssqpeer/homepage/homepage-1.png'}
                        ></Image>
                </div>
                <div>
                    <Image
                            style={{ opacity: 1 }}
                            alt="NextUI hero Image"
                            src={'https://o.666visa.cn/static/ssqpeer/homepage/homepage-1.png'}
                        ></Image>
                </div>
                <div>
                    <Image
                            style={{ opacity: 1 }}
                            alt="NextUI hero Image"
                            src={'https://o.666visa.cn/static/ssqpeer/homepage/homepage-1.png'}
                        ></Image>
                </div>
            </Carousel>
        );
    }

    function RenderCard() {
        return (
            <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">NextUI</p>
                        <p className="text-small text-default-500">nextui.org</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>Make beautiful websites regardless of your design experience.</p>
                </CardBody>
                <Divider />
                <CardFooter>{/* <Link>Visit source code on GitHub.</Link> */}</CardFooter>
            </Card>
        );
    }

    // const formatter = (value: number) => <CountUp end={value} separator="," />;

    // const RenderStatistic: React.FC = (value) => {
    //   return (
    //     <Statistic
    //       title="Account Balance (CNY)"
    //       value={112893}
    //       precision={2}
    //       // formatter={formatter(value)}
    //     />
    //   );
    // };

    return (
        <ul>
            <Header />
            {/* <Im /> */}
            {RenderCarousel()}
            {SearchBox()}

            {/* {RenderStatistic(1234)} */}
            {list?.data.map((item, index) => {
                return (
                    <div key={index}>
                            <Link
                                href={{
                                    pathname: `/visa/visa-shop-detail`,
                                    query: { id: `${item.product_id}` },
                                }}
                            >
                                <Content shopInfo={item}></Content>
                                {/* <div>
                                    {item.product_name}
                                    {item.product_id}
                                </div> */}
                                {/* <div onClick={() => dispatch(addToCart([{ id: 123 }]))}  > {item.product_name}</div> */}
                            </Link>
                        </div>
                );
            })}
        </ul>
    );
}
