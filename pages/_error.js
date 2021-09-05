import Link from 'next/link';

const _error = () => {
  return (
    <div id="notfound-github">
      <div className="notfound-github">
        <div className="notfound-github-404">
          <h1>4<span></span>4</h1>
        </div>
        <h2>Oops! Page Not Be Found</h2>
        <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
        <Link href="/">
          <a>Back to homepage</a>
        </Link>
      </div>
    </div>
  );
}

export default _error;