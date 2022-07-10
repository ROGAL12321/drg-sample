import Head from 'next/head';
import Header from '@/components/layouts/header';
import styles from '@/base/styles/home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommerce demo</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <Header />
        </div>
      </main>
    </>
  );
}
