import Layaout from "../components/Layaout";

const Index = () => {
  return (
    <Layaout>
      <header className="row">
        <section className="col-md-12 my-2">
          <div className="card card-body text-center bg-dark text-light">
            <div className="row">
              <div className="col-md-3">
                <img src="elliotgaramendi-2.jpg" alt="Elliot Garamendi" className="img-fluid" />
              </div>
              <div className="col-md-9">
                <h1 className="card-title">Elliot Garamendi</h1>
                <h5 className="card-subtitle my-2">👨‍💻Desarrollador👨‍💻 | 🌌Frontend🌌 | ⚛React⚛</h5>
                <h6 className="card-subtitle text-muted mb-2">MERN</h6>
                <p className="card-text">Estudiante de Ingeniería de Software perteneciente a los primeros puestos.Apasionado del autoaprendizaje con el deseo de iniciar y crecer en desarrollo web Frontend con la biblioteca React y con la visión de ser un desarrollador JavaScript FullStack.</p>
                <a href="#" className="btn btn-primary mx-2" rel="noreferrer">Hire Me</a>
              </div>
            </div>
          </div>
        </section>
      </header>
    </Layaout>
  );
};

export default Index;