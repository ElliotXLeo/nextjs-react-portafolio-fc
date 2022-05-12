import Skill from "./Skill";

const Skills = ({ skills }) => {
  return (
    <section className="col-md-4">
      <div className="card-header">
        <h2>🦄Skills🦄</h2>
      </div>
      <div className="card-body">
        {skills.map((skill) => {
          if (skill.main == 1) {
            return (
              <Skill
                key={skill.id}
                skill={skill}
              />
            );
          }
        })}
      </div>
    </section>
  );
}

export default Skills;