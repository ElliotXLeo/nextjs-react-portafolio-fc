const Skill = ({ skill }) => {

  const { id, name, percentage } = skill;

  return (
    <div className="py-1" key={`skill${id}`}>
      <h6>{name}</h6>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${percentage}%` }}>{percentage}%</div>
      </div>
    </div>
  );
}

export default Skill;