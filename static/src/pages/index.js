import Layout from '@/shared/components/Layout';
import Home from '@/modules/Home';
import { ROUTES } from '@/shared/utils/routerConstant';

const Index = () => {
  return (
    <Layout title={ROUTES.HOME.TITLE}>
      <Home />
    </Layout>
  );
};

export default Index;
