import Button from '@/shared/components/Button/Button';
import styles from './Content.module.scss';

export default function Content({
  className,
  heading,
  text,
  button,
  id,
  handleProduct,
}) {
  return (
    <div className={`${className} ${styles.content}`}>
      <h2 className={styles.content__header}>{heading}</h2>
      <p className={styles.content__text}>{text}</p>
      <Button onClick={() => handleProduct(id)}>Explore {button}</Button>
    </div>
  );
}
