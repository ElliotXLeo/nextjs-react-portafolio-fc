const Profile = ({ profile }) => {
  return (
    <article className="row animate__animated animate__fadeInUp" id="profile">
      <div className="col-md-12 my-2">
        <div className="card text-center bg-dark text-light">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-3">
                <img src={profile.urlPhoto} alt={profile.shortName} className="img-fluid rounded-circle" />
              </div>
              <div className="col-md-9">
                <h1 className="card-title">{profile.name}</h1>
                <h5 className="card-subtitle my-2">{profile.title}</h5>
                <h6 className="card-subtitle text-muted mb-2">{profile.mainStack}</h6>
                <p className="card-text">{profile.description}</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <a href="#contact" className="btn btn-primary mx-2" rel="noreferrer">Hire Me</a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Profile;