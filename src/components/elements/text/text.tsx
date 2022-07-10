import React from 'react';
import clsx from 'clsx';

import styles from './text.module.scss';

interface TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
}

const H1: React.FC<TextProps> = ({ as: Component = 'h1', className, children }) => {
  return <Component className={clsx(styles.h1, { [className]: className })}>{children}</Component>;
};

const H2: React.FC<TextProps> = ({ as: Component = 'h2', className, children }) => {
  return <Component className={clsx(styles.h2, { [className]: className })}>{children}</Component>;
};

const H3: React.FC<TextProps> = ({ as: Component = 'h3', className, children }) => {
  return <Component className={clsx(styles.h3, { [className]: className })}>{children}</Component>;
};

const H4: React.FC<TextProps> = ({ as: Component = 'h4', className, children }) => {
  return <Component className={clsx(styles.h4, { [className]: className })}>{children}</Component>;
};

const H4Thin: React.FC<TextProps> = ({ as: Component = 'h4', className, children }) => {
  return (
    <Component
      className={clsx(styles.h4__thin, {
        [className]: className,
      })}
    >
      {children}
    </Component>
  );
};

const H5: React.FC<TextProps> = ({ as: Component = 'h5', className, children }) => {
  return <Component className={clsx(styles.h5, { [className]: className })}>{children}</Component>;
};

const H5Semi: React.FC<TextProps> = ({ as: Component = 'h5', className, children }) => {
  return (
    <Component
      className={clsx(styles.h5__semi, {
        [className]: className,
      })}
    >
      {children}
    </Component>
  );
};

const H5Thin: React.FC<TextProps> = ({ as: Component = 'h5', className, children }) => {
  return (
    <Component
      className={clsx(styles.h5__thin, {
        [className]: className,
      })}
    >
      {children}
    </Component>
  );
};

const H6: React.FC<TextProps> = ({ as: Component = 'h6', className, children }) => {
  return <Component className={clsx(styles.h6, { [className]: className })}>{children}</Component>;
};

const H6Thin: React.FC<TextProps> = ({ as: Component = 'h6', className, children }) => {
  return (
    <Component
      className={clsx(styles.h6__thin, {
        [className]: className,
      })}
    >
      {children}
    </Component>
  );
};

const Quote: React.FC<TextProps> = ({ as: Component = 'p', className, children }) => {
  return (
    <Component
      className={clsx(styles.quote, {
        [className]: className,
      })}
    >
      {children}
    </Component>
  );
};

export default {
  H1,
  H2,
  H3,
  H4,
  H4Thin,
  H5,
  H5Semi,
  H5Thin,
  H6,
  H6Thin,
  Quote,
};
