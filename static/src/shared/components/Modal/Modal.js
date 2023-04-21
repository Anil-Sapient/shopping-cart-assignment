import { GlobalContext } from '@/shared/contexts/GlobalContext';
import useFocusTrap from '@/shared/hooks/useFocusTrap';
import { useContext, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import styles from './Modal.module.scss';

export default function Modal({ children }) {
  const {
    cartItems: { cartOpen },
    dispatch,
  } = useContext(GlobalContext);

  const ref = useRef(null);
  const setElementRef = useFocusTrap(null);

  useEffect(() => {
    if (cartOpen) {
      setElementRef(ref);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      setElementRef(null);
      document.body.style.overflow = 'unset';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartOpen]);

  return ReactDom.createPortal(
    <div className={styles.modal} ref={ref}>
      <div
        className={styles.modal__overlay}
        onClick={() => dispatch({ type: 'HANDLE_CART', cartOpen: !cartOpen })}
      />
      <div>{children}</div>
    </div>,
    document.getElementById('portal')
  );
}
