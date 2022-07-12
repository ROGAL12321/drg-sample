import Heading from '@/components/elements/heading';
import Cart from './cart';

import styles from './header.module.scss';

export default function Header() {
  return (
    <header>
      <div className={styles.wrapper}>
        <Heading as="h1">Next.JS Code Sample</Heading>
        <Cart />
      </div>
    </header>
  );
}
