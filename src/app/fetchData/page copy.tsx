// import {useEffect,useState} from 'react';
// function App(){
// const [products,setProducts]=useState([])
// useEffect(()=>{
// fetch('/dummy-backend.json')
// .then((response)=>{
// return response.json();
// })

// .then((data)=>{setProducts(data.products)})
// },[])
// return
// <ul>
// {products.map((product)=>
// <li key={product.id}>{product.title}</li>
// ))}
// </ul>
// ):
// }

// 'use client';
import { useEffect, useState } from 'react';

interface PState {
  id: number;
  title: string;
}

// export const fetchActiveGame = async (code: string) => {
//   try {
//     const res = await fetch(`/dummy-backend.json`, {
//       cache: 'no-store',
//     });
//     return res;
//   } catch (err) {
//     console.error(err);
//   }
// };

//! 再执行这里
function FetchAppPage(props: any) {
  // const game = await fetchActiveGame('1');
  // const [products, setProducts] = useState([]);

  //   const getStaticProps = async () => {
  //     let result = await fetch(
  //       'http://apitest.dianzhijia.com/api/open/article?page=1',
  //       {
  //         headers: {
  //           Accept: 'application/vnd.dpexpo.v1+json', //设置请求头
  //         },
  //         method: 'get',
  //       }
  //     );
  //     let res = await result.json(); //必须通过此方法才可返回数据
  //     const {
  //       data: { data },
  //     } = res;
  //     return {
  //       props: {
  //         data, //props值传导render函数中
  //       },
  //     };
  //   };

  // useEffect(() => {
  //   fetch('/dummy-backend.json')
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data.products));
  // }, []);

  const { products } = props;
  console.log(products, 'products');
  return (
    <div>
      <div>666123 无用</div>
      <div>1</div>
      {(products || []).map((product: PState) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </div>
  );
}

//! 先执行这里
export async function StaticDataPage({ params }: any) {
  console.log('step1',params)
  return {
    props: {
      products: [{ id: 1, title: '123' }],
    },
  };
}

export default FetchAppPage;
