function Page({ data }: any) {
  console.log(data, 'data');
  // 渲染数据...

  return (
    <div>
      <div>666123 app [code]文件</div>
      <div>1</div>
      {/* {(products || []).map((product: PState) => (
        <li key={product.id}>{product.title}</li>
      ))} */}
    </div>
  );
}

// 每个请求都会调用它2
// export async function getServerSideProps() {
// export async function getStaticProps() {
//   // 从外部 API 获取数据
//   // const res = await fetch(`/dummy-backend.json`);
//   // const data = await res.json();

//   // 通过 props 向页面传递数据
//   // return { props: { data } };

//   const res = '1234'
//   return { props: { res } };
// }

export default Page;
