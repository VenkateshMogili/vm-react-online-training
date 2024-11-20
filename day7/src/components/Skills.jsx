import "./Skills.css";

export default function Skills() {
  const skills = ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODEJS", "MERN STACK", "MEAN STACK"];

  return (
    <div className="skills-container" name="skills">
      <h1>Skills</h1>
      <p className="skills-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequatur quos obcaecati laudantium labore maiores dolorum. Illo delectus sunt doloremque, eveniet reprehenderit natus cupiditate commodi deleniti harum ducimus sint sequi.</p>

    <div className="skills-list">
      {skills.map((skill, index) => (
        <div className="language" key={index}>
          <p>{skill}</p>
        </div>
      ))}
      </div>

    </div>
  )
}
