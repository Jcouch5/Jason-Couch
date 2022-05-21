import resume from "../../images/resume.png";
function Resume() {
  return (
    <div>
      <h3>Resume</h3>
      <div>
        <img
          alt="Jason Couch's Resume"
          src={resume}
          className="mx-auto w-75 d-block"
        />
      </div>
    </div>
  );
}
export default Resume;
