// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json(
    [{
      title: 'Кадровая школа КРО АСО России',
      image_url: '/images/news_1.jpg',
      link_url: '/news/28-12-2020/kadrovaya_shkola'
    },
    {
      title: 'Волонтеры для дежурства на вакцинации от коронавируса',
      image_url: '/images/news_2.jpg',
      link_url: '/news/28-12-2020/kadrovaya_shkola'
    },
    {
      title: 'День космонавтики',
      image_url: '/images/news_3.jpg',
      link_url: '/news/28-12-2020/kadrovaya_shkola'
    },
    {
      title: 'Экологическая акция — «Чистый Берег»',
      image_url: '/images/news_4.jpg',
      link_url: '/news/28-12-2020/kadrovaya_shkola'
    },
    {
      title: 'Субботник-экологическая акция',
      image_url: '/images/news_5.jpg',
      link_url: '/news/28-12-2020/kadrovaya_shkola'
    },
    {
      title: 'Выставка картин в КТУИС',
      image_url: '/images/news_6.jpg',
      link_url: '/news/28-12-2020/kadrovaya_shkola'
    }]
  );
};
