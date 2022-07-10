import React from 'react';
import clsx from 'clsx';

import { Arrow, SliderArrow } from '@/components/elements/icons';

import styles from './button.module.scss';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'arrow' | 'slider';
  as?: 'button' | 'a' | React.ElementType;
  className?: string;
  href?: string;
  children?: React.ReactNode;
}

function Button(props: ButtonProps, ref: React.ForwardedRef<HTMLElement>) {
  const { variant = 'primary', as: Component = 'button', className, children, href } = props;
  const buttonClasses: string = clsx(styles.button, {
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.arrow]: variant === 'arrow',
    [styles.slider]: variant === 'slider',
    [className]: className,
  });

  return (
    <Component className={buttonClasses} href={href} ref={ref}>
      {children}
      {variant === 'arrow' && <Arrow styles={styles} />}
      {variant === 'slider' && <SliderArrow styles={styles} />}
    </Component>
  );
}

export default React.forwardRef(Button);
