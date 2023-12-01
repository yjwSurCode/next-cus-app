// 'use client';
import { usePathname, useSearchParams } from 'next/navigation';

// export const getStaticProps = async (context: any) => {
// export const getServerSideProps = async (context: any) => {
// export const generateStaticParams = async (context: any) => {
//   // const res = await fetch('https://api.github.com/repos/vercel/next.js');
//   // const res = await fetch('/public/dummy-backend.json');
//   // const res = await fetch('http://jsonplaceholder.typicode.com/posts');
//   // console.log('555',res.body);
//   const repo = { id: '123' };
//   return { props: { repo } };
// };

export default function Code(context: any) {
    // const params = useSearchParams();
    // const Pathname = usePathname();
    // console.log(Pathname, 'params1', params.getAll('id'));
    // console.log(params, params.values(), params.toString(), 'params2');

    console.log('6666', context); //! { params: { code: '1' }, searchParams: {} }
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-xl">[code]---</div>
        </div>
    );
}
