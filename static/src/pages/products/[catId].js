import Layout from '@/shared/components/Layout';
import Products from '@/modules/Products';
import { ROUTES } from '@/shared/utils/routerConstant';

const Index = () => {
  return (
    <Layout title={ROUTES.PRODUCTS.TITLE}>
      <Products />
    </Layout>
  );
};

export default Index;
