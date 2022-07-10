import React from 'react';
import clsx from 'clsx';

import styles from './grid.module.scss';

interface GridProps {
  cols: number;
  tablet?: number;
  desktop?: number;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

export default function Grid(props: GridProps) {
  const { cols, tablet, desktop, as: Component = 'div', className, children } = props;

  const gridClasses: string = clsx(styles.grid, {
    [styles[`grid-cols-${cols}`]]: cols,
    [styles[`grid-cols-tablet-${tablet}`]]: tablet,
    [styles[`grid-cols-desktop-${desktop}`]]: desktop,
    [className]: className,
  });

  return <Component className={gridClasses}>{children}</Component>;
}
