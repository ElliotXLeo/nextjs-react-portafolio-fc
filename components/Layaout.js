import { useRouter } from 'next/dist/client/router';
import { Fragment } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layaout = ({ children, profile, seeFooter = true }) => {

  const router = useRouter();

  return (
    <Fragment>
      <header>
        <Navbar />
      </header>

      <main className="container my-4">
        {children}
      </main>

      {
        seeFooter ?
          <Footer
            profile={profile}
          />
          :
          null
      }

    </Fragment>
  );
}

export default Layaout;