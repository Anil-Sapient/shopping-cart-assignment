import Layout from '@/shared/components/Layout';
import Register from '@/modules/Register';
import { ROUTES } from '@/shared/utils/routerConstant';

const Index = () => {
  return (
    <Layout title={ROUTES.SIGNUP.TITLE}>
      <Register />
    </Layout>
  );
};

export default Index;
