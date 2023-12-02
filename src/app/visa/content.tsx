import React, { useState, useEffect } from 'react';
import './visa-page.module.scss';

function App({ shopInfo }: { shopInfo: any }) {
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState<any>([]);
    const [showCountries, setShowCountries] = useState(false);

    console.log(shopInfo, 'shopInfo');
    useEffect(() => {
        // 这里可以替换为你的实际数据
        setCountries([
            { state: '州1', countries: ['国家1', '国家2'] },
            { state: '州2', countries: ['国家3', '国家4'] },
        ]);
    }, []);

    return (
        <div className="flex items-center justify-center">
            <div>
                <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                    <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                                alt="image"
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-75 rounded-xl">
                                <h2 className="text-4xl font-bold text-center">
                                    Black Friday <br />
                                    <span className="text-red-500"> 50% Off</span>
                                </h2>
                            </div>
                        </div>
                        <div className="p-6">
                            <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-red-500 uppercase">
                                Startups
                            </h6>
                            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                {shopInfo.product_name}
                            </h4>
                            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                {shopInfo.cover_province.map((item: any) => {
                                    return <span key={item.province_code}>{item.province_name}-</span>;
                                })}
                            </p>
                            <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-red-500 uppercase">
                                {shopInfo.validity_period_unit}
                            </h6>

                            <a className="inline-block" href="#">
                                <button
                                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-red-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    Buy Now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        ></path>
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="App">
        //     <div>123</div>
        //     <input
        //         type="text"
        //         value={country}
        //         onChange={(e) => setCountry(e.target.value)}
        //         onFocus={() => setShowCountries(true)}
        //         onBlur={() => setTimeout(() => setShowCountries(false), 200)}
        //     />
        //     {showCountries && (
        //         <div className="dropdown">
        //             {countries.map((item: any, index: number) => (
        //                 <div key={index}>
        //                     <h3>{item.state}</h3>
        //                     {item.countries.map((country:any, index:any) => (
        //                         <p key={index} onClick={() => setCountry(country)}>
        //                             {country}
        //                         </p>
        //                     ))}
        //                 </div>
        //             ))}
        //         </div>
        //     )}
        // </div>
    );
}

export default App;
