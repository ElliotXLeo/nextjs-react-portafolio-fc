import axios from 'axios';
import { useEffect, useState } from 'react';
import Contacts from '../components/Contacts';
import Experiences from '../components/Experiences';
import Layaout from '../components/Layaout';
import Profile from '../components/Profile';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Spinner from '../components/Spinner';

const Index = () => {
  
  const [data, setData] = useState({});
  
  const consultarApi = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `https://elliotxleo.github.io/api-json-public/json/portafolio-elliot.json`
      });
      const data = res.data;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    consultarApi();
  }, []);
  
  const { profile, skills, experiences, projects, contacts } = data;

  if (Object.keys(data).length === 0) {
    return (
      <Spinner />
    );
  } else {
    return (

      <Layaout
        profile={profile}
      >

        <Profile
          profile={profile}
        />

        <section className="row animate__animated animate__fadeInUp">
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

        <Contacts
          contacts={contacts}
        />

      </Layaout>
    );
  }

};

export default Index;