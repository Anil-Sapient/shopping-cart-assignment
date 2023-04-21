import Button from '@/shared/components/Button/Button';
import { ROUTES } from '@/shared/utils/routerConstant';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './Dropdown.module.scss';

export default function Dropdown({ items, handleProduct }) {
  const [isActive, setIsActive] = useState(true);
  const [name, setName] = useState('All Products');
  const router = useRouter();
  useEffect(() => {
    if (router.route === ROUTES.PRODUCTS.ROUTE) {
      const id = router.route.split('/')[2];
      items.find((item) => {
        if (item.id === id) {
          setName(item.name);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const handleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.dropdown}>
      <Button
        onClick={() => handleDropdown()}
        className={styles.dropdown__button}
      >
        <span>{name}</span>
        <span>&#x25BC;</span>
      </Button>
      <ul className={styles.dropdown__content}>
        {items.map((item, index) => (
          <li
            onClick={() => {
              handleDropdown();
              handleProduct(item.id);
              setName(item.name);
            }}
            key={index}
            className={`${
              isActive
                ? styles.dropdown__content__list
                : `${styles.dropdown__content__list} ${styles.show}`
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
