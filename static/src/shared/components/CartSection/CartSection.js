import Image from '@/shared/components/Image/Image';
import Counter from '@/shared/components/Counter/Counter';
import styles from './CartSection.module.scss';

export default function CartSection({ product }) {
  const totalPrice = product?.quantity * product?.price;

  return (
    <section className={styles.cart_section}>
      <Image
        source={product?.imageUrl}
        alt={`Image of ${product?.name}`}
        className={styles.cart_section__image}
        width={300}
        height={300}
      />
      <h2 className={styles.cart_section__title}>{product?.name}</h2>
      <Counter
        id={product?.id}
        quantity={product?.quantity}
        price={product?.price}
        stock={product?.stock}
      />
      <p className={styles.cart_section__totalprice}>Rs.{totalPrice}</p>
    </section>
  );
}
