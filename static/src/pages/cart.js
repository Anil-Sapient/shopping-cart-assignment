import Layout from '@/shared/components/Layout';
import CartPage from '@/modules/CartPage/CartPage';
import { ROUTES } from '@/shared/utils/routerConstant';

const Index = () => {
  return (
    <Layout title={ROUTES.CART.TITLE}>
      <CartPage />
    </Layout>
  );
};

export default Index;
