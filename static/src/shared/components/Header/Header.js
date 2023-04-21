import Logo from '@/shared/components/Logo/Logo';
import Cart from '@/shared/components/Cart/Cart';
import { ROUTES } from '@/shared/utils/routerConstant';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__sub_container}>
        <Link href={ROUTES.HOME.ROUTE}>
          <Logo />
        </Link>
        <nav className={styles.header__sub_container__nav_items}>
          <Link
            href={ROUTES.HOME.ROUTE}
            className={styles.header__sub_container__nav_items__link}
          >
            Home
          </Link>
          <Link
            href={ROUTES.PRODUCTS.ROUTE}
            className={styles.header__sub_container__nav_items__link}
          >
            Products
          </Link>
        </nav>
        <div className={styles.header__sub_container__nav_wrapper}>
          <nav className={styles.header__sub_container__nav_wrapper__login}>
            <Link
              href={ROUTES.LOGIN.ROUTE}
              className={styles.header__sub_container__nav_wrapper__login__link}
            >
              SignIn
            </Link>
            <Link
              href={ROUTES.SIGNUP.ROUTE}
              className={styles.header__sub_container__nav_wrapper__login__link}
            >
              Register
            </Link>
          </nav>
          <Cart />
        </div>
      </div>
    </header>
  );
}
