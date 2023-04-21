import Carousel from '@/shared/components/Carousel/Carousel';
import Section from '@/shared/components/Section/Section';
import useProducts from '@/shared/hooks/useProducts';
import styles from './Home.module.scss';

export default function Home() {
  const { filteredCategory, handleProduct } = useProducts();

  return (
    <main className={styles.home_container}>
      <Carousel />
      {filteredCategory.map((category, index) => (
        <Section
          key={index}
          id={category.id}
          url={category.imageUrl}
          heading={category.name}
          text={category.description}
          button={category.key}
          order={category.order}
          handleProduct={handleProduct}
        />
      ))}
    </main>
  );
}
