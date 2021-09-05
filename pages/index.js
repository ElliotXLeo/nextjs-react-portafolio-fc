import Contact from '../components/Contact';
import Experiences from '../components/Experiences';
import Layaout from '../components/Layaout';
import Profile from '../components/Profile';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { profile, skills, experiences, projects, contact } from '../nextjs-react-portafolio-fc'

const Index = () => {

  experiences.reverse();
  projects.reverse();

  return (
    <Layaout
      profile={profile}
    >

      <Profile
        profile={profile}
      />

      <section className="row">
        <div className="col-md-12 my-2">
          <div className="card text-center bg-dark text-light">
            <div className="row">

              <Skills
                skills={skills}
              />

              <Experiences
                experiences={experiences}
              />

            </div>
          </div>
        </div>
      </section>

      <Projects
        projects={projects}
      />

      <Contact
        contact={contact}
      />

    </Layaout>
  );
};

export default Index;