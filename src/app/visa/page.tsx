'use client';
import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';
import { unstable_serialize } from 'swr'; // ✅ Available in server components
import { unstable_serialize as infinite_unstable_serialize } from 'swr/infinite'; // ✅ Available in server components
import { useEffect, useState } from 'react';
import { Carousel, Col, Row, Statistic } from 'antd';
import { Input } from '@nextui-org/react';
import { Header } from '@/app/(landing)/home/Header';
import Link from 'next/link';
import { postData } from '@/utils/request';
import Content from '@/app/visa/content';
// import { useDispatch } from 'react-redux';
// import CountUp from 'react-countup';

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
            <div className="w-[340px] h-[240px] px-8 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                <Input
                    label="Search"
                    isClearable
                    radius="lg"
                    classNames={{
                        label: 'text-black/50 dark:text-white/90',
                        input: [
                            'bg-transparent',
                            'text-black/90 dark:text-white/90',
                            'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                        ],
                        innerWrapper: 'bg-transparent',
                        inputWrapper: [
                            'shadow-xl',
                            'bg-default-200/50',
                            'dark:bg-default/60',
                            'backdrop-blur-xl',
                            'backdrop-saturate-200',
                            'hover:bg-default-200/70',
                            'dark:hover:bg-default/70',
                            'group-data-[focused=true]:bg-default-200/50',
                            'dark:group-data-[focused=true]:bg-default/60',
                            '!cursor-text',
                        ],
                    }}
                    placeholder="Type to search..."
                    startContent={
                        <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                    }
                />
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
                    <h3 className={styles.CarouselStyle}></h3>
                </div>
                <div>
                    <h3 className={styles.CarouselStyle}>2</h3>
                </div>
                <div>
                    <h3 className={styles.CarouselStyle}>3</h3>
                </div>
                <div>
                    <h3 className={styles.CarouselStyle}>1</h3>
                </div>
            </Carousel>
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
            <Im />
            {RenderCarousel()}
            {SearchBox()}
            <Content></Content>
            {/* {RenderStatistic(1234)} */}
            <div className={styles.titleStyle}>mail title</div>
            {list?.data.map((item, index) => {
                return (
                    <div key={index}>
                        <div>
                            <Link
                                href={{
                                    pathname: '/visa/visa-shop-detail',
                                    query: { id: `${item.visa_type_id}` },
                                }}
                            >
                                {/* <div onClick={() => dispatch(addToCart([{ id: 123 }]))}  > {item.product_name}</div> */}
                            </Link>
                        </div>
                    </div>
                );
            })}
        </ul>
    );
}
