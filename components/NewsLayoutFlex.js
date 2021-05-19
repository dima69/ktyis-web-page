import Image from 'next/image';
import Link from 'next/link';

export default function News_layout_from_tailwind() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row flex-wrap ">
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <a className="block w-full h-full" href="#" title="Link">
            <img src="/images/asd.jpg" alt="" border="0" className="h-full w-full object-cover" />
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-col sm:flex-row md:flex-col">
            <div className="w-full sm:w-1/2 md:w-full h-64">
              <a className="block w-full h-full" href="#" title="Link">
                <img src="/images/asd2.jpg" alt="" border="0" className="h-full w-full object-cover" />
              </a>
            </div>
            <div className="w-full sm:w-1/2 md:w-full h-64 relative"> {/* align-self:start */}
              <a className="block w-full h-full" href="#" title="Link"> 
                <img src="/images/asd3.jpg" alt="" border="0" className="h-full w-full object-cover" />
                <div className="absolute bottom-0 w-full p-2 max-h-full bg-black bg-opacity-60">
                  {/* <h1 className="text-gray-200 text-xl font-serif">В КТУИС прошел протест в поддержку BLM Навальный лох</h1> */}
                  {/* <p className="text-gray-200 text-xl truncate">Description asd as dasd asd asd asd</p> */}
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-64 md:h-48 relative">
          <a className="block w-full h-full" href="#" title="Link">
            <Image src="/images/asd4.jpg" layout="fill" objectFit="cover"></Image>
            <div className="absolute bottom-0 w-full p-2 bg-black bg-opacity-50 max-h-full">
              {/* <h1 className="text-white text-xl">В КТУИС прошел протест в поддержку BLM Навальный лох</h1> */}
              {/* <p className="text-gray-300 text-xl truncate ">Description asd as dasd asd asd asd</p> */}
            </div>
            {/* <img src="/images/asd4.jpg" alt="" border="0" className="h-full w-full object-cover" /> */}
          </a>
        </div>
        <div className="w-full sm:w-1/3 h-64 md:h-48">
          <a className="block w-full h-full" href="#" title="Link">
            <img src="/images/asd5.jpg" alt="" border="0" className="h-full w-full object-cover" />
          </a>
        </div>
        <div className="w-full sm:w-1/3 h-64 md:h-48">
          <a className="block w-full h-full" href="#" title="Link">
            <img src="/images/asd6.jpg" alt="" border="0" className="h-full w-full object-cover" />
          </a>
        </div>
      </div>
    </div>
  );
};