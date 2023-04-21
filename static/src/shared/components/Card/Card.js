import Button from '@/shared/components/Button/Button';
import Image from '@/shared/components/Image/Image';
import { GlobalContext } from '@/shared/contexts/GlobalContext';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { useContext } from 'react';
import styles from './Card.module.scss';

export default function Card({ name, imageUrl, price, stock, text, id, imageWidth, imageHeight }) {
  const browserWidth = useMediaQuery('(min-width: 769px)');
  const {
    dispatch,
    cartItems: { products },
  } = useContext(GlobalContext);

  function addItemToCart() {
    if (!products[id]) {
      dispatch({
        type: 'ADD_ITEM',
        product: {
          [id]: {
            id,
            imageUrl,
            name,
            price,
            stock,
            quantity: 1,
          },
        },
      });
    } else {
      dispatch({
        type: 'EDIT_ITEM',
        id: id,
      });
    }
  }

  return (
    <section className={styles.card_container}>
      <h2 className={styles.card_container__title}>{name}</h2>
      <figure className={styles.card_container__image}>
        <Image source={imageUrl} alt={`Image of ${name}`} width={imageWidth} height={imageHeight}  />
      </figure>
      <p className={styles.card_container__text} title={text}>
        {text}
      </p>
      <section className={styles.card_container__section}>
        {browserWidth ? (
          <>
            <p className={styles.card_container__section__price}>
              MRP Rs.{price}
            </p>
            <Button
              onClick={() => addItemToCart()}
              className={styles.card_container__section__buy_button}
              aria-label={`Buy Now ${name}`}
            >
              Buy Now
            </Button>
          </>
        ) : (
          <Button
            onClick={() => addItemToCart()}
            className={styles.card_container__section__buy_button}
          >
            Buy Now @ Rs.{price}
          </Button>
        )}
      </section>
    </section>
  );
}
