export default function NewsLayout({ news_articles_list }) {
  return (
    <div className="grid overflow-x-auto grid-flow-col md:grid-flow-row md:overflow-hidden md:grid-cols-6 md:grid-rows-3 md:w-auto md:h-auto md:gap-x-2 md:gap-y-2">
      <div className="inline-block h-52 w-80 px-3 ml-10 md:block md:row-span-2 md:col-span-3 md:w-auto md:h-auto md:ml-0 md:px-0">
        <figure className="relative h-full">
          <a href="#">
            <img src="/images/asd5.jpg" alt="" className="h-full w-full object-cover" />
            <figcaption className="absolute bottom-0 w-full bg-black bg-opacity-60 p-2">
              <h2 className="text-white text-xl font-serif">Новость №1</h2>
            </figcaption>
          </a>
        </figure>
      </div>
      <div className="inline-block h-52 w-80 px-3 md:block md:col-span-3 md:w-auto md:h-auto md:px-0">
        <figure className="relative h-full">
          <a href="#">
            <img src="/images/asd2.jpg" alt="" className="h-full w-full object-cover" />
            <figcaption className="absolute bottom-0 w-full bg-black bg-opacity-60 p-2">
              <h2 className="text-white text-xl font-serif">Новость №2</h2>
            </figcaption>
          </a>
        </figure>
      </div>
      <div className="inline-block h-52 w-80 px-3 md:block md:col-span-3 md:w-auto md:h-auto md:px-0"> {/* align-self:start */}
        <figure className="relative h-full">
          <a href="#">
            <img src="/images/asd3.jpg" alt="" className="h-full w-full object-cover" />
            <figcaption className="absolute bottom-0 w-full bg-black bg-opacity-60 p-2">
              <h2 className="text-white text-xl font-serif">Новость №3</h2>
            </figcaption>
          </a>
        </figure>
      </div>
      <div className="inline-block h-52 w-80 px-3 md:block md:col-span-2 md:w-auto md:h-auto md:px-0">
        <figure className="relative h-full">
          <a href="#">
            <img src="/images/asd4.jpg" alt="" className="h-full w-full object-cover" />
            <figcaption className="absolute bottom-0 w-full bg-black bg-opacity-60 p-2">
              <h2 className="text-white text-xl font-serif">Новость №4</h2>
            </figcaption>
          </a>
        </figure>
      </div>
      <div className="inline-block h-52 w-80 px-3 md:block md:col-span-2 md:w-auto md:h-auto md:px-0">
        <figure className="relative h-full">
          <a href="#">
            <img src="/images/asd5.jpg" alt="" className="h-full w-full object-cover" />
            <figcaption className="absolute bottom-0 w-full bg-black bg-opacity-60 p-2">
              <h2 className="text-white text-xl font-serif">Новость №5</h2>
            </figcaption>
          </a>
        </figure>
      </div>
      <div className="inline-block h-52 w-80 px-3 md:block md:col-span-2 md:w-auto md:h-auto md:px-0">
        <figure className="relative h-full">
          <a href="#">
            <img src="/images/asd6.jpg" alt="" border="0" className="h-full w-full object-cover" />
            <figcaption className="absolute bottom-0 w-full bg-black bg-opacity-60 p-2">
              <h2 className="text-white text-xl font-serif">Новость №6</h2>
            </figcaption>
          </a>
        </figure>
      </div>
    </div>
  )
};
