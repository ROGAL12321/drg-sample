import React from 'react';
import clsx from 'clsx';

import styles from './container.module.scss';

interface ContainerProps {
  as: React.ElementType;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export default function Container(props: ContainerProps) {
  const { as: Component, className, children } = props;
  const containerClasses: string = clsx(styles.container, {
    [className]: className,
  });

  return <Component className={containerClasses}>{children}</Component>;
}
