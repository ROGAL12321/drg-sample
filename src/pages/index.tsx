import Head from 'next/head';
import MainLayout from '@/components/layouts/main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommerce demo</title>
      </Head>
      <MainLayout>
        <p>Text</p>
      </MainLayout>
    </>
  );
}
