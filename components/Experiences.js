import Experience from "./Experience";

const Experiences = ({ experiences }) => {
  return (
    <section className="col-md-8">
      <div className="card-header">
        <h2>👨‍💻Experiences👨‍💻</h2>
      </div>
      <div className="card-body">
        <div className="list-group">
          {[...experiences].reverse().map((experience) => {
            if (experience.main == 1) {
              return (
                <Experience
                  key={experience.id}
                  experience={experience}
                />
              );
            }
          })}
        </div>
      </div>
      <div className="card-footer">
        <a href="#contacts" className="btn btn-primary mx-2" rel="noreferrer">Hire Me</a>
      </div>
    </section>
  );
}

export default Experiences;