import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark animate__animated animate__fadeInUp">
      <div className="container-fluid container">
        <Link href="/">
          <a className="navbar-brand" >Next.js React | Elliot Garamendi</a>
        </Link>
        <div className="" id="">
          <ul className="navbar-nav flex-row">
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