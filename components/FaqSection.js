export default function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl my-5">
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
  );
};
