import React from 'react';
import clsx from 'clsx';

import styles from './grid.module.scss';

interface GridItemProps {
  span: number;
  children: React.ReactNode | React.ReactNode[];
  tablet?: number;
  desktop?: number;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
}

export default function GridItem(props: GridItemProps) {
  const { span, tablet, desktop, as: Component = 'div', className, children, ...rest } = props;

  const gridItemClasses: string = clsx({
    [styles[`col-span-${span}`]]: span,
    [styles[`col-span-tablet-${tablet}`]]: tablet,
    [styles[`col-span-desktop-${desktop}`]]: desktop,
    [className]: className,
  });

  return (
    <Component className={gridItemClasses} {...rest}>
      {children}
    </Component>
  );
}
