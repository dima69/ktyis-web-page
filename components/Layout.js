import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
// лого слева
export default function Layout({ children, metaTitle }) {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};