import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid container">
        <Link href="/">
          <a className="navbar-brand" >Next.js React</a>
        </Link>
        <div className="" id="">
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-2">
              <Link href="/blog">
                <a className="nav-link active" aria-current="page" >Blog</a>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/github">
                <a className="nav-link">GitHub</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;