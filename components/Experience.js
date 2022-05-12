const Experience = ({ experience }) => {
  const { id, company, position, period, activities } = experience;
  return (
    <a href="#contacts" className="list-group-item list-group-item-action" aria-current="true" key={`Experience${id}`}>
      <div className="d-flex w-100 justify-content-between text-primary">
        <h5 className="mb-1">{company}</h5>
        <small>{period}</small>
      </div>
      <h6 className="text-start my-2">{position}</h6>
      <p className="mb-1 text-start">{activities[0]}</p>
      <p className="mb-1 text-start">{activities[1]}</p>
    </a>
  );
}

export default Experience;