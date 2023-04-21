import Button from '@/shared/components/Button/Button';
import { GlobalContext } from '@/shared/contexts/GlobalContext';
import { useContext } from 'react';
import styles from './Counter.module.scss';

export default function Counter({ quantity, price, id, stock }) {
  const { dispatch } = useContext(GlobalContext);

  const editItem = () => {
    dispatch({
      type: 'EDIT_ITEM',
      id: id,
    });
  };

  const removeItem = () => {
    dispatch({
      type: 'REMOVE_ITEM',
      id: id,
    });
  };

  return (
    <div className={styles.counter}>
      <Button onClick={removeItem} className={styles.counter__button}>
        -
      </Button>
      <p className={styles.counter__text}>{quantity}</p>
      <Button
        onClick={editItem}
        className={styles.counter__button}
        disabled={stock === quantity}
      >
        +
      </Button>
      <p className={styles.counter__multiply}>&#10005;</p>
      <p className={styles.counter__text}>{price}</p>
    </div>
  );
}
