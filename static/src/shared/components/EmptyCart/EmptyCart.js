import Button from '@/shared/components/Button/Button';
import { GlobalContext } from '@/shared/contexts/GlobalContext';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { ROUTES } from '@/shared/utils/routerConstant';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import styles from './EmptyCart.module.scss';

export default function EmptyCart() {
  const browserWidth = useMediaQuery('(min-width: 769px)');
  const router = useRouter();
  const {
    cartItems: { cartOpen },
    dispatch,
  } = useContext(GlobalContext);

  const goToProducts = () => {
    if (browserWidth) {
      dispatch({
        type: 'HANDLE_CART',
        cartOpen: !cartOpen,
      });
    }
    router.push(ROUTES.PRODUCTS.ROUTE);
  };

  return (
    <section className={styles.empty_cart}>
      <div className={styles.empty_cart__sub_container}>
        <h2 className={styles.empty_cart__sub_container__title}>
          No items in your cart
        </h2>
        <p className={styles.empty_cart__sub_container__text}>
          Your favourite items are just a click away
        </p>
      </div>
      <footer className={styles.empty_cart__footer}>
        <Button
          className={styles.empty_cart__footer__start_button}
          onClick={() => goToProducts()}
        >
          Start Shopping
        </Button>
      </footer>
    </section>
  );
}
