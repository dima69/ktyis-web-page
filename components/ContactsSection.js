export default function ContactsSection() {
  return (
    <section className="mx-auto max-w-3xl my-10">
      <div className="grid auto-rows-auto md:grid-cols-2 md:grid-rows-1 justify-center gap-y-5 md:gap-y-0">
        {/* @@@change it to actual map */}
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
  );
};
