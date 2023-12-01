import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

type Repo = {
  name: string;
  stargazers_count: number;
};

export const config = {
  runtime: 'nodejs', // or "edge"
};

// export const getServerSideProps = (async (context) => {
export const getStaticProps = (async (context) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return { props: { repo } };
}) satisfies GetServerSideProps<{
  repo: Repo;
}>;

export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return repo.stargazers_count;
}
