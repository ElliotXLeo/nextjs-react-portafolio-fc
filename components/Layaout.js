import { Fragment } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layaout = ({ children, profile }) => {
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