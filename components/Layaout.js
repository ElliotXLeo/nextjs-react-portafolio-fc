import { Fragment } from "react";
import Navbar from "./Navbar";

const Layaout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main className="container my-4">
        {children}
      </main>
    </Fragment>
  );
}

export default Layaout;