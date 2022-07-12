import clsx from 'clsx';

import styles from './button.module.scss';

interface ButtonProps extends ComponentProps {
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
}

export default function Button(props: ButtonProps) {
  const { variant = 'primary', type = 'button', className, children } = props;

  const buttonClasses: string = clsx(styles.button, {
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [className]: className,
  });

  return (
    <button type={type} className={buttonClasses}>
      {children}
    </button>
  );
}
