import CardTablet from '@/shared/components/CartTablet/CardTablet';
import { GlobalContext } from '@/shared/contexts/GlobalContext';
import { useContext } from 'react';
import styles from './CartPage.module.scss';

export default function CartPage() {
  const {
    cartItems: { count, products },
  } = useContext(GlobalContext);

  const countItems = count === 1 ? `${count} item` : `${count} items`;
  return (
    <main className={styles.cartpage}>
      <h1 className={styles.cartpage__title}>My Cart ({countItems})</h1>
      <CardTablet count={count} products={products} />
    </main>
  );
}
