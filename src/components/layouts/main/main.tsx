import Header from '@/components/sections/header';
import Button from '@/components/elements/button';

import styles from './main.module.scss';

export default function MainLayout({ children }: ComponentProps) {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        {children}
        <Button> Add to Cart </Button>
        <Button variant="secondary"> Add to Cart </Button>
      </main>
    </div>
  );
}
