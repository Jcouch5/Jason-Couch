import pic from "../../images/Jcouch.JPG";
function AboutMe() {
  return (
    <div className="row">
      <h2>About Me</h2>
      <article className="row">
        <img
          src={pic}
          alt="Photo of Jason Couch"
          className="align-self-center col col-sm-2 m-2"
        />

        <aside className="col col-9 align-self-center">
          <p>
            My name is Jason Couch. I am 22 years old. I am currently on track
            to graduate with Bachelors of Business Adminstration with a
            concentration in Finance in July of 2022. I am also currently
            enrolled in a Coding Bootcamp sponsered by Georgia Tech.
          </p>
          <p>
            I have experience with Microsoft Suite, SAP, and webpage
            development. I am beginner level with Java and Python and
            intermediate with HTMl and CSS.
          </p>
          <p>
            I currently work at Medline Industries as an Operations Specialist.
            I have worked at Medline for about 3 years. I started at Medline as
            an Utility Operator and moved up to Machine Operator 1, 2, and 3
            before moving into my current role.
          </p>
        </aside>
      </article>
    </div>
  );
}

export default AboutMe;
