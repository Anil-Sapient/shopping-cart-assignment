import Button from '@/shared/components/Button/Button';
import { useRouter } from 'next/router';
import styles from './Sidebar.module.scss';

export default function Sidebar({ filteredCategory, handleProduct }) {
  const router = useRouter();
  return (
    <aside className={styles.sidebar}>
      {filteredCategory.map((category) => (
        <Button
          onClick={() => handleProduct(category.id)}
          key={category.id}
          className={`${styles.sidebar__button} ${
            router.query.catId === category.id ? styles.active : ''
          }`}
        >
          {category.name}
        </Button>
      ))}
    </aside>
  );
}
