import Layout from '../components/Layout';
import NewsSectionLayout from '../components/NewsSectionLayout';
import FaqSection from '../components/FaqSection';
import MajorsSection from '../components/MajorsSection';
import ContactsSection from '../components/ContactsSection';

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/newsLatest')
  const latestNewsData = await res.json()

  if (!latestNewsData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { latestNewsData },
  }
};

export default function Home({ latestNewsData }) {
  return (
    <Layout metaTitle="КТУИС">
      {/* title leading */}
      <h1 className="text-center py-6 max-w-2xl mx-auto">
        <span className="text-gray-900 text-4xl break-normal tracking-tight font-medium">
          Краснодарский техникум управления, информатизации и&nbsp;сервиса
        </span>
      </h1>
      <NewsSectionLayout latestNewsItems={latestNewsData} />
      <MajorsSection />
      <FaqSection />
      <ContactsSection />
    </Layout>
  );
};
