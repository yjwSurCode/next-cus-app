'use client';
import { usePathname, useSearchParams } from 'next/navigation';
export default function Code() {


 const params = useSearchParams();
  const  Pathname = usePathname();
  console.log(Pathname, 'params1', params.getAll('id'));
  console.log(params, params.values(), params.toString(), 'params2');
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="text-xl">[...code]</div>
    </div>
  );
}
