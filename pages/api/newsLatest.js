// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json(
    [{
      title: 'КАДРОВАЯ ШКОЛА КРО АСО РОССИИ',
      image_url: '/images/news_1.jpg',
      link_url: '/news/28-12-2020/kadrovaya_shkola'
    },
    {
      title: 'ВОЛОНТЕРЫ ДЛЯ ДЕЖУРСТВА НА ВАКЦИНАЦИИ ОТ КОРОНАВИРУСА',
      image_url: '/images/news_2.jpg',
      link_url: '/news/28-12-2020/kadrovaya_shkola'
    },
    {
      title: 'ДЕНЬ КОСМОНАВТИКИ',
      image_url: '/images/news_3.jpg',
      link_url: '/news/28-12-2020/kadrovaya_shkola'
    },
    {
      title: 'ЭКОЛОГИЧЕСКАЯ АКЦИЯ — «ЧИСТЫЙ БЕРЕГ»',
      image_url: '/images/news_4.jpg',
      link_url: '/news/28-12-2020/kadrovaya_shkola'
    },
    {
      title: 'CУББОТНИК-ЭКОЛОГИЧЕСКАЯ АКЦИЯ',
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
