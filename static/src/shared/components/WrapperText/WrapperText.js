import styles from './WrapperText.module.scss';

export default function WrapperText({ className = '', title, description }) {
  return (
    <div className={className}>
      <h2 className={styles.section__header}>{title}</h2>
      <p className={styles.section__text}>{description}</p>
    </div>
  );
}
