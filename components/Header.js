import Link from "next/link";
import { useRouter } from 'next/router';

// @@@ make it bigger
// @@@ disable on current page

// @@@ change text to: back to main page 
function Logo() {
  const router = useRouter();
  const isIndexPage = router.asPath === '/';
  return (
    // <div className="flex justify-center items-center">
    <div className="grid grid-cols-2 justify-center items-center">
      <svg className="justify-self-end w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
      {isIndexPage
        ? <p className="text-xl font-medium font-serif">КТУИС</p>
        : <Link href="/"><a className="text-2xl">На главную</a></Link>}
    </div>
  );
};

export default function Header() {
  let router = useRouter();
  let currentPage = router.asPath;
  return (
    <header>
      <nav className="max-w-3xl mx-auto">
        <Logo />
        <ul className="text-gray-800 text-2xl text-center md:text-2xl md:justify-center overflow-x-auto whitespace-nowrap my-2">
          <li className="inline mx-4">
            {currentPage === '/about'
              ? <span className="underline text-gray-500">О техникуме</span>
              : <Link href="/about"><a className="text-black">О техникуме</a></Link>}
          </li>
          <li className="inline mx-4">
            {currentPage === '/enrollee'
              ? <span className="underline text-gray-500">Поступающим</span>
              : <Link href="/enrollee"><a className="text-black">Поступающим</a></Link>}
          </li>
          <li className="inline mx-4">
            {currentPage === '/students'
              ? <span className="underline text-gray-500">Студентам</span>
              : <Link href="/students"><a className="text-black">Студентам</a></Link>}
          </li>
          <li className="inline mx-4">
            {currentPage === '/contacts'
              ? <span className="underline text-gray-500">Контакты</span>
              : <Link href="/contacts"><a className="text-black">Контакты</a></Link>}
          </li>
        </ul>
      </nav>
    </header>
  );
};