import styles from './Logo.module.scss';
import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/static/images/logo.png"
      className={styles.logo_image}
      alt="Logo Image"
      width={190}
      height={86}
    />
  );
}
