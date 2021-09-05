const Contact = ({ contact }) => {
  return (
    <section className="row  animate__animated animate__fadeInUp" id="contact">
      <div className="col-md-12 my-2">
        <div className="card text-center bg-dark text-light">
          <div className="card-header">
            <h2>💻Contact💻</h2>
          </div>
          <div className="card-body">
            <div className="row contact">
              <nav className="nav">
                <ul className="nav__list">
                  {contact.map((element) => {
                    if (element.main == 1) {
                      return (
                        <li className="nav__item" key={element.id}>
                          <a href={element.urlContact}>
                            <img src={element.urlImage} alt={element.name} className="nav__image" />
                          </a>
                        </li>
                      );
                    }
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;