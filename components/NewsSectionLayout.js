function NewsItemFigure({ articleData }) {
  return (
    <figure className="relative h-full hover:shadow-lg transform duration-200 hover:scale-95">
      <a href="#"> {/* <a href={articleData.link_url}>  */}
        <img src={articleData.image_url} alt="" className="h-full w-full object-cover shadow-sm rounded-xl hover:shadow-md" />
        <figcaption className="absolute bottom-0 bg-black bg-opacity-60 p-2 rounded-b-xl">
          <h2 className="text-white text-xl font-semibold">{articleData.title}</h2>
        </figcaption>
      </a>
    </figure>
  );
};

export default function NewsLayout({ latestNewsItems }) {
  return (
    <section className="mx-auto max-w-4xl my-5">
      {/* <a className="inline-block mb-2 mx-3 md:mx-0 text-2xl md:text-3xl font-bold border-b border-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-300" href="">Часто задаваемые вопросы &#8594;</a> */}
      <a className="inline-block ml-2 mb-2 text-2xl md:text-3xl font-bold border-b border-green-500 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-green-500" href="">Новости &#8594;</a>
      <div className="grid overflow-x-auto grid-flow-col md:grid-flow-row md:grid-cols-6 md:grid-rows-3 gap-x-3 md:gap-y-2">
        <div className="min-h-full w-80 md:row-span-2 md:col-span-3 md:w-auto md:h-60 md:ml-0">
          <NewsItemFigure articleData={latestNewsItems[0]} />
        </div>
        <div className="h-full w-80 md:col-span-3 min-w-full md:h-60">
          <NewsItemFigure articleData={latestNewsItems[1]} />
        </div>
        <div className="h-full w-80 md:col-span-3 md:w-auto md:h-60">
          <NewsItemFigure articleData={latestNewsItems[2]} />
        </div>
        <div className="h-full w-80 md:col-span-2 md:w-auto md:h-60">
          <NewsItemFigure articleData={latestNewsItems[3]} />
        </div>
        <div className="h-full w-80 md:col-span-2 md:w-auto md:h-60">
          <NewsItemFigure articleData={latestNewsItems[4]} />
        </div>
        <div className="h-full w-80 md:col-span-2 md:w-auto md:h-60">
          <NewsItemFigure articleData={latestNewsItems[5]} />
        </div>
      </div>
    </section>
  );
};
