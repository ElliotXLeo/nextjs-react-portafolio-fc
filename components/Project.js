const Project = ({ element }) => {

  const { id, title, mainTechnology, technologies, about, image, urlDemo, urlCode } = element;

  return (
    <article className="col-md-4 my-2" key={`project${id}`}>
      <div className="card text-center bg-dark text-light">
        <a href={urlDemo} target="_blank" rel="noreferrer" className="over-flow-h">
          <img src={image} className="card-img-top" alt={title} />
        </a>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h5 className="card-subtitle my-2">Main: {mainTechnology}</h5>
          <h6 className="card-subtitle text-muted mb-2">Tecnologías: {technologies}</h6>
          <p className="card-text">{about}</p>
          <a href={urlDemo} className="btn btn-primary mx-1" target="_blank" rel="noreferrer">Demo</a>
          <a href={urlCode} className="btn btn-success mx-1" target="_blank" rel="noreferrer">Código</a>
        </div>
      </div>
    </article>
  );
}

export default Project;