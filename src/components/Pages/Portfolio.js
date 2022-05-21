import Project from "./Project";

const projects = [
  {
    name: "asdf",
    description: "jasd",
    github: "link",
    deploy: "link",
    img: "asdf",
  },
];
function Portfolio() {
  return (
    <div>
      <h3>Portfolio</h3>
      {projects.map((proj) => (
        <Project {...proj} />
      ))}
    </div>
  );
}
export default Portfolio;
