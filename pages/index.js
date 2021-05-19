import Layout from '../components/Layout';
import NewsSectionLayout from '../components/NewsSectionLayout';


export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/newsLatest')
  const news_data = await res.json()

  if (!news_data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { news_data },
  }
};

export default function Home({ news_data }) {
  return (
    <Layout title="КТУИС">
      {/* title leading */}
      <h1 className="text-center py-6 max-w-2xl mx-auto">
        <span className="rounded-none text-gray-900 text-2xl break-normal">
          КРАСНОДАРСКИЙ ТЕХНИКУМ УПРАВЛЕНИЯ, ИНФОРМАТИЗАЦИИ И&nbsp;СЕРВИСА
        </span>
      </h1>

      <section className="mx-auto max-w-4xl">
        <a className="px-2 bg-blue-800 text-xl md:text-2xl text-white" href="">Новости</a>
        <NewsSectionLayout />
      </section>

      {/* specialnosti section */}
      <section className="mx-auto max-w-3xl">
        <a className="px-2 bg-yellow-800 text-xl md:text-2xl text-white" href="">Специальности</a>
        <div className="flex flex-wrap text-xl justify-center">
          <a href="" className="a-speci">Программирование</a>
          <a href="" className="a-speci">Экономика и бухгалтерский учет</a>
          <a href="" className="a-speci">Гостиничный сервис</a>
          <a href="" className="a-speci">Финансы</a>
          <a href="" className="a-speci">Туризм</a>
          <a href="" className="a-speci">Банковское дело</a>
          <a href="" className="a-speci">Дизайн</a>
        </div>
      </section>

      <br></br>
      {/* faq section */}
      <section className="mx-auto max-w-3xl">
        <a className="px-2 bg-green-800 text-xl md:text-2xl text-white" href="">Часто задаваемые вопросы</a>
        <div className="grid auto-rows-min px-3 md:px-0 grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-3 font-medium text-lg">
          <div>
            <p className="faq-question">Какие документы нужны для поступления и какие сроки приёма документов?</p>
            <p className="faq-answer">Подробнее <a href="http://ktyis.ru/info_priem">здесь</a></p>
          </div>
          <div>
            <p className="faq-question">Бюджетные места есть?</p>
            <p className="faq-answer">На 2021 год не предусмотрено</p>
          </div>
          <div>
            <p className="faq-question">Стипендия?</p>
            <p className="faq-answer">На 2021 год не предусмотрено</p>
          </div>
          <div>
            <p className="faq-question">Срок обучения?</p>
            <p className="faq-answer">Подробнее <a href="https://ktyis.ru/sroki_obycheniya">здесь</a></p>
          </div>
          <div>
            <p className="faq-question">Есть общежитие?</p>
            <p className="faq-answer">К сожалению, нет :(</p>
          </div>
          <div>
            <p className="faq-question">День открытых дверей</p>
            <p className="faq-answer w-10/12">Дату можно узнать в разделе <a href="https://ktyis.ru">Новости</a>, <a href="https://vk.com/spo_ktyis">в&nbsp;ВК</a> и <a href="https://instagram.com/spo_ktyis">Инстаграме</a></p>
          </div>
          <div>
            <p className="faq-question">Стоимость обучения?</p>
            <p className="faq-answer">Подробнее <a href="http://ktyis.ru/stoimost">здесь</a></p>
          </div>
        </div>
      </section>

      {/* contacts section */}
      {/* address tag <address></address> */}
      <section className="mx-auto max-w-3xl pt-4 md:pt-12">
        <div className="grid md:grid-cols-2 md:grid-rows-1 justify-center">
          {/* map */}
          <img className="shadow-xl border md:order-first order-last rounded-3xl" src="/images/map_image.jpg" alt="" />
          <address className="not-italic text-xl pl-8">
            <p className="font-bold text-4xl my-5 place-self-center">Контакты</p>
            <p><a href="https://yandex.ru/maps/-/CCU4YVAdsC">улица Евдокии Бершанской, 19А</a></p> {/* ссылка на яндекс карты*/}
            <p>Проезд трамваями: 5, 9</p>
            <p>Остановка «Школа»</p>
            <p className="text-blue-600 my-5"><a className="" href="tel:+78612371732">+7 861 237-17-32</a></p>
            <p>Приёмная комиссия</p>
            <a className="text-blue-600" href="mailto:pk_ktyis@mail.ru">pk_ktyis@mail.ru</a>
            <p className="pt-2">Электронная почта учреждения</p>
            <a className="text-blue-600" href="mailto:nou-kuis@yandex.ru">nou-kuis@yandex.ru</a>
          </address>
        </div>
      </section>
    </Layout>
  );
};
