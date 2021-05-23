import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div>
            <Link href="/">
              <a>トップ Top</a>
            </Link>
          </div>
          <div>
            <Link href="/about">
              <a>紹介 About</a>
            </Link>
          </div>
          <div>
            <Link href="/notes">
              <a>ノート Notes</a>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
