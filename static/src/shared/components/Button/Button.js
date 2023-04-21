import styles from './Button.module.scss';

export default function Button({
  children,
  className = '',
  onClick,
  ...props
}) {
  return (
    <button
      className={`${className} ${styles.button_wrapper}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
