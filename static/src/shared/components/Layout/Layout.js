import Footer from '@/shared/components/Footer/Footer';
import Header from '@/shared/components/Header/Header';
import Head from 'next/head';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Sabka bazaar shopping cart" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/images/logo.png" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
