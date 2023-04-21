import Button from '@/shared/components/Button/Button';
import { GlobalContext } from '@/shared/contexts/GlobalContext';
import { useContext } from 'react';
import CardTablet from '../CartTablet/CardTablet';
import styles from './CartModal.module.scss';

export default function CartModal({ cartOpen }) {
  const {
    cartItems: { count, products },
    dispatch,
  } = useContext(GlobalContext);
  const countItems = count === 1 ? `${count} item` : `${count} items`;

  return (
    <section className={styles.cartmodal__section}>
      <div className={styles.cartmodal__section__heading}>
        <h1 className={styles.cartmodal__section__heading__title}>
          My Cart ({countItems})
        </h1>
        <Button
          className={styles.cartmodal__section__heading__button}
          onClick={() => dispatch({ type: 'HANDLE_CART', cartOpen: !cartOpen })}
        >
          &#10005;
        </Button>
      </div>
      <CardTablet
        className={styles.cartmodal__section__flex}
        count={count}
        products={products}
      />
    </section>
  );
}
