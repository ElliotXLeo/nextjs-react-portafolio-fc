import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <section className="row animate__animated animate__fadeInUp">
      <div className="col-md-12 my-2">
        <div className="card text-center bg-dark text-light">
          <div className="card-header">
            <h2>⚛Projects⚛</h2>
          </div>
          <div className="card-body">
            <div className="row">
              {[...projects].reverse().map((element) => {
                if (element.main === 1) {
                  return (
                    <Project
                      key={element.id}
                      element={element}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div className="card-footer">
            <a href="#contacts" className="btn btn-primary mx-2" rel="noreferrer">Hire Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;