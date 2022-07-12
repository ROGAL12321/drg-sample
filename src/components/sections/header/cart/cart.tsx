import clsx from 'clsx';

import { CartIcon } from '@/components/elements/icons';

import styles from './cart.module.scss';

export default function Cart() {
  return (
    <div className={styles.cart}>
      <CartIcon />
      <span className={clsx(styles.orders, 'flex-center')}>1</span>
    </div>
  );
}
