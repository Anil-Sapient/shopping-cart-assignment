import Dropdown from '@/shared/components/Dropdown/Dropdown';
import Sidebar from '@/shared/components/Sidebar/Sidebar';
import Card from '@/shared/components/Card/Card';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import useProducts from '@/shared/hooks/useProducts';
import styles from './Products.module.scss';

export default function Products() {
  const { filteredCategory, filteredProduct, handleProduct } = useProducts();

  const browserWidth = useMediaQuery('(max-width: 480px)');

  return (
    <main className={styles.product_container}>
      {browserWidth ? (
        <Dropdown
          items={[...filteredCategory, { id: '', name: 'All Products' }]}
          handleProduct={handleProduct}
          filteredProduct={filteredProduct}
        />
      ) : (
        <Sidebar
          filteredCategory={filteredCategory}
          handleProduct={handleProduct}
        />
      )}
      <main className={styles.product_container__card}>
        {filteredProduct.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            imageUrl={product.imageURL}
            name={product.name}
            price={product.price}
            stock={product.stock}
            text={product.description}
            imageWidth={300}
            imageHeight={300}
          />
        ))}
      </main>
    </main>
  );
}
