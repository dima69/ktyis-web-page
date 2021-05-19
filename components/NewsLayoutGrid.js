export default function NewsLayoutGrid({ news_articles_list }) {
  return (
    // <div className="grid overflow-hidden grid-cols-6 grid-rows-3 gap-2 w-auto h-auto">
    <div className="grid overflow-hidden grid-cols-none md:grid-cols-6 md:grid-rows-3 md:gap-x-2 gap-y-2 w-auto h-auto">
      <div className="row-span-2 col-span-3">
        <figure className="relative h-full">
          <a href="#">
            <img src="/images/asd5.jpg" alt="" className="h-full w-full object-cover" />
            <figcaption className="absolute bottom-0 w-full bg-black bg-opacity-60 p-2">
              <h2 className="text-white text-xl font-serif">Новость №1</h2>
            </figcaption>
          </a>
        </figure>
      </div>
      <div className="col-span-3">
        <figure className="relative h-full">
          <a href="#">
            <img src="/images/asd2.jpg" alt="" className="h-full w-full object-cover" />
            <figcaption className="absolute bottom-0 w-full bg-black bg-opacity-60 p-2">
              <h2 className="text-white text-xl font-serif">Новость №2</h2>
            </figcaption>
          </a>
        </figure>
      </div>
      <div className="col-span-3"> {/* align-self:start */}
        <figure className="relative h-full">
          <a href="#">
            <img src="/images/asd3.jpg" alt="" className="h-full w-full object-cover" />
            <figcaption className="absolute bottom-0 w-full bg-black bg-opacity-60 p-2">
              <h2 className="text-white text-xl font-serif">Новость №3</h2>
            </figcaption>
          </a>
        </figure>
      </div>
      <div className="col-span-2">
        <figure className="relative h-full">
          <a href="#">
            <img src="/images/asd4.jpg" alt="" className="h-full w-full object-cover" />
            <figcaption className="absolute bottom-0 w-full bg-black bg-opacity-60 p-2">
              <h2 className="text-white text-xl font-serif">Новость №4</h2>
            </figcaption>
          </a>
        </figure>
      </div>
      <div className="col-span-2">
        <figure className="relative h-full">
          <a href="#">
            <img src="/images/asd5.jpg" alt="" className="h-full w-full object-cover" />
            <figcaption className="absolute bottom-0 w-full bg-black bg-opacity-60 p-2">
              <h2 className="text-white text-xl font-serif">Новость №5</h2>
            </figcaption>
          </a>
        </figure>
      </div>
      <div className="col-span-2">
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
