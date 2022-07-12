import styles from './heading.module.scss';

interface HeadingProps extends ComponentProps {
  as: 'h1';
}

export default function Heading({ as: Component = 'h1', children }: HeadingProps) {
  return <Component className={styles.heading}>{children}</Component>;
}
