import axios from 'axios';
import Layaout from '../components/Layaout';
import { profile } from '../nextjs-react-portafolio-fc';
import _error from './_error';

const GitHub = ({ user, statusCode }) => {

  if (statusCode) {
    return (
      <Layaout
        profile={profile}
        seeFooter={false}
      >
        <article className="row justify-content-center align-items-center animate__animated animate__fadeInUp">
          <div className="col-md-5 my-2">
            <div className="card text-center bg-dark text-light">
              <div className="card-header">
                <h1 className="card-title">{user.login}</h1>
              </div>
              <a href={user.html_url} target="_blank" rel="noreferrer" className="rounded-circle over-flow-h m-3">
                <img src={user.avatar_url} className="card-img-top" alt={user.name} />
              </a>
              <div className="card-body">
                <h4 className="card-subtitle my-2">👨‍💻{user.name}👨‍💻</h4>
                <h5 className="card-subtitle text-muted mb-2">{user.location}</h5>
                <p className="card-text mb-2">{user.bio}</p>
                <a href={user.html_url} target="_blanck">
                  <button type="button" className="btn btn-warning position-relative">
                    Repositories
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {user.public_repos}
                      <span className="visually-hidden"> repositories</span>
                    </span>
                  </button>
                </a>
              </div>
              <div className="card-footer">
                <a href={user.html_url} className="btn btn-primary mx-2" rel="noreferrer" target="_blanck">GitHub</a>
              </div>
            </div>
          </div>
        </article>
      </Layaout>
    );
  } else {
    return (
      <Layaout
        profile={profile}
      >
        <_error />
      </Layaout >
    );
  }

};

export async function getServerSideProps() {
  const res = await fetch(`https://api.github.com/users/${profile.user}`);
  const data = await res.json();
  const statusCode = res.status === 200;
  return {
    props: {
      user: data,
      statusCode: statusCode
    }
  }
}

export default GitHub;