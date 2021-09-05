import { useRouter } from 'next/dist/client/router';
import nProgress from "nProgress";
import { Fragment, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layaout = ({ children, profile }) => {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      nProgress.start();
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', () => nProgress.done());
    // router.events.on("routeChangeError", () => nProgress.done());

    return (
      () => {
        router.events.off('routeChangeStart', handleRouteChange);
      }
    );
  }, []);


  return (
    <Fragment>
      <header>
        <Navbar />
      </header>

      <main className="container my-4">
        {children}
      </main>

      <Footer
        profile={profile}
      />

    </Fragment>
  );
}

export default Layaout;