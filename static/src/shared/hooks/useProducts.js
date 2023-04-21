import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Categories from '../../../../server/categories/index.get.json';
import Products from '../../../../server/products/index.get.json';

export default function useProducts() {
  const router = useRouter();

  const filteredCategory = Categories.filter(
    (category) => category.enabled
  ).sort((a, b) => a.order - b.order);

  const [filteredProduct, setFilteredProduct] = useState(Products);

  function handleProduct(id) {
    if (id) {
      router.push(`/products/${id}`);
    } else {
      router.push(`/products`);
    }

    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const {
      query: { catId = '' },
    } = router;
    if (catId) {
      setFilteredProduct(
        Products.filter((product) => product.category === catId)
      );
    } else {
      setFilteredProduct(Products);
    }
  }, [router]);

  return {
    filteredCategory,
    filteredProduct,
    handleProduct,
  };
}
