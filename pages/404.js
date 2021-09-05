import Link from 'next/link';

const custom404 = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </div>
    </div>
  );
}

export default custom404;