import { useRouter } from 'next/router';
import styles from './Footer.module.scss';

export default function Footer() {
  const router = useRouter();
  if (router.pathname.includes('cartpage')) {
    return null;
  }
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>
        Copyright © 2011-2018 Sabka Baazar Gorcery Supplies Pvt. Ltd.
      </p>
    </footer>
  );
}
