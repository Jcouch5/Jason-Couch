import Project from "./Project";
import theorist from "../../images/The Theorist.png";
import dashboard from "../../images/Dashboard-Daily.png";
import editor from "../../images/Text-Editor.png";
import teamProfile from "../../images/Team-profile.png";
const projects = [
  {
    name: "The Theorist",
    description:
      "A place to add, store, view, and respond to any and all conspiracy theories",
    github: "https://github.com/Jcouch5/The-Theorist",
    deploy: "https://desolate-peak-38823.herokuapp.com/",
    img: theorist,
    alt: "picture of the deployed application",
  },
  {
    name: "Dashboard Daily",
    description:
      "A daily dashboard for you to check the weather, news, and play some games",
    github: "https://github.com/Jcouch5/Morning-meme-page",
    deploy: "https://samuels1996.github.io/Morning-meme-page/",
    img: dashboard,
    alt: "picture of the deployed application",
  },
  {
    name: "Team Profile Generator",
    description:
      "Add in the employee information and it will build you a website that will showcases your team.",
    github: "https://github.com/Jcouch5/Team-Profile-Generator",
    deploy: "https://jcouch5.github.io/Team-Profile-Generator/",
    img: teamProfile,
    alt: "picture of the deployed application",
  },
  {
    name: "Text Editor",
    description:
      "This application is a PWA. It can be downloaded. It uses the in browser database to store information. It is meant to be used to add text and save it.",
    github: "https://github.com/Jcouch5/Text-Editor",
    deploy: "https://git.heroku.com/text-editor-js.git",
    img: editor,
    alt: "picture of the deployed application",
  },
];
function Portfolio() {
  return (
    <div className="row">
      <h3>Portfolio</h3>
      {projects.map((proj) => (
        <Project {...proj} />
      ))}
    </div>
  );
}
export default Portfolio;
