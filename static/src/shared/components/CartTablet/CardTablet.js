import Button from '@/shared/components/Button/Button';
import { useEffect, useState } from 'react';
import styles from './CardTablet.module.scss';

import Image from '@/shared/components/Image/Image';
import CartSection from '@/shared/components/CartSection/CartSection';
import EmptyCart from '@/shared/components/EmptyCart/EmptyCart';

export default function CardTablet({ className = '', count, products }) {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      Object.values(products).reduce(
        (acc, current) => acc + current.quantity * current.price,
        0
      )
    );
  }, [products]);

  return (
    <div className={`${className} ${styles.cart_tablet}`}>
      {/* Cart Page when Items are Present */}
      {count > 0 ? (
        <>
          <section className={styles.cart_tablet__section_wrapper}>
            {Object.values(products).map((product) => {
              return <CartSection key={product?.id} product={product} />;
            })}

            <div className={styles.cart_tablet__discount}>
              <Image
                source="/static/images/lowest-price.png"
                alt={'Discounted Image'}
                className={styles.cart_tablet__discount__img}
                width={144}
                height={51}
              />
              <p className={styles.cart_tablet__discount__text}>
                {`You won't find it cheaper anywhere`}
              </p>
            </div>
          </section>

          <footer className={styles.cart_tablet__footer}>
            <p className={styles.cart_tablet__footer__text}>
              Promo code can be applied on payment page
            </p>
            <Button className={styles.cart_tablet__footer__buyout_button}>
              <span>Proceed to Checkout</span>
              <span>Rs.{totalAmount} &#10095;</span>
            </Button>
          </footer>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
