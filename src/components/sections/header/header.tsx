import Heading from '@/components/elements/heading';

import styles from './header.module.scss';

export default function Header() {
  return (
    <header>
      <div className={styles.wrapper}>
        <Heading as="h1">Next.JS Code Sample</Heading>
      </div>
    </header>
  );
}
