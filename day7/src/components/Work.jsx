import "./Work.css";

export default function Work() {
  const work = ["Project 1", "Project 2", "JAVASCRIPT", "REACT", "NODEJS", "MERN STACK", "MEAN STACK"];

  return (
    <div className="work-container" name="work">
      <h1>Work</h1>
      <p className="work-description">Checkout my recent works!</p>

    <div className="work-list">
      {work.map((work, index) => (
        <div className="work-language" key={index}>
          <p>{work}</p>
        </div>
      ))}
      </div>

    </div>
  )
}
