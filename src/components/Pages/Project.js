function Project(props) {
  return (
    <div className="card col-sm-4 box">
      <img alt={props.alt} src={props.img} className="card-img-top" />
      <div className="card-body">
        <h5>{props.name}</h5>
        <p>{props.description}</p>
        <a href={props.github} className="d-block white">
          Github repository
        </a>
        <a href={props.deploy} className="d-block white">
          Deployed Application
        </a>
      </div>
    </div>
  );
}

export default Project;
