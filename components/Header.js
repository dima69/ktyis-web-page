import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="max-w-xl sm:mx-auto">
        <div className="logo flex justify-center items-center">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
          </svg>
          <Link href="/">
            <a>КТУИС</a>
          </Link>
        </div>
        <ul className="flex flex-row text-gray-800 text-xl overflow-y-auto text-center md:text-xl md:justify-center">
          <li>
            <Link href="/about">
              <a>О&nbsp;техникуме</a>
            </Link>
          </li>
          <li>
            <Link href="/enrollee">
              <a>Поступающим</a>
            </Link>
          </li>
          <li>
            <Link href="/students">
              <a>Студентам</a>
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              <a>Контакты</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};