import Image from '@/shared/components/Image/Image';
import Modal from '@/shared/components/Modal/Modal';
import CartModal from '@/shared/components/CartModal/CartModal';
import { GlobalContext } from '@/shared/contexts/GlobalContext';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import styles from './Cart.module.scss';

export default function Cart() {
  const {
    cartItems: { cartOpen, products },
    dispatch,
  } = useContext(GlobalContext);

  const countItem =
    Object.keys(products).length === 1
      ? `${Object.keys(products).length} item`
      : `${Object.keys(products).length} items`;

  const router = useRouter();
  const browserWidth = useMediaQuery('(min-width: 769px)');

  const handleBrowserWidth = () => {
    browserWidth
      ? dispatch({ type: 'HANDLE_CART', cartOpen: !cartOpen })
      : router.push('/cart');
  };

  const handleOnKeyPress = (e) => {
    e.key === 'Enter' && handleBrowserWidth();
  };

  return (
    <>
      <div
        className={styles.cart_wrapper}
        onClick={() => {
          handleBrowserWidth();
        }}
        tabIndex={0}
        onKeyPress={handleOnKeyPress}
      >
        <Image
          source="./static/images/cart.svg"
          className={styles.cart_wrapper__image}
          alt={'Cart Image'}
          width={40}
          height={40}
        />
        <p className={styles.cart_wrapper__text}>{countItem}</p>
      </div>
      {cartOpen ? (
        <Modal>
          <CartModal cartOpen={cartOpen} />{' '}
        </Modal>
      ) : (
        ''
      )}
    </>
  );
}
