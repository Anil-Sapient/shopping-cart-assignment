import Layout from '@/shared/components/Layout';
import Signin from '@/modules/Signin';
import { ROUTES } from '@/shared/utils/routerConstant';

const Index = () => {
  return (
    <Layout title={ROUTES.LOGIN.TITLE}>
      <Signin />
    </Layout>
  );
};

export default Index;
