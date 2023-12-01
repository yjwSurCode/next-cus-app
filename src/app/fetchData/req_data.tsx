import styles from './data.module.scss';
import { fetchArchivedGame } from '@/api/user/game';
import { useRouter, useSearchParams } from 'next/navigation';

async function getProjects() {
  // const res = await fetch('https://formbricks.com/api/oss-friends');
  const res = await fetch(
    'http://106.12.154.161/images/json/dummy-backend.json',
    {
      next: { revalidate: 5 },
    }
  );

  const data: { data: any[] } = await res.json();
  console.log('555', data);

  return data;
}

async function getStaticProjects() {
  const res = await fetch(
    'http://106.12.154.161/images/json/dummy-backend.json'
  );

  const data: { data: any[] } = await res.json();
  console.log('666', data);

  return data;
}

export default async function Dashboard() {
  const projects: any = await getProjects();
  const staticProjects: any = await getStaticProjects();

  return (
    <div>
      <h1 style={{ fontWeight: 'bold', fontSize: '30px' }}>
        纯静态1: {staticProjects.data}
      </h1>
      {projects.data?.map((item: any) => {
        return (
          <div key={item.name}>
            <div className="mt-4">
              <div>123{item.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
