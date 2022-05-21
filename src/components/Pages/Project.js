function Project(props) {
  return (
    <div className="card">
      <img alt="Project" src={props.img} className="card-img-top" />
      <div className="card-body">
        <h5>{props.name}</h5>
        <p>{props.description}</p>
        <a href={props.github}>Github repository</a>
        <a href={props.deploy}>Deployed Application</a>
      </div>
    </div>
  );
}

export default Project;
