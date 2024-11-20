import "./Resume.css";
import resumePDF from '../assets/VenkateshMogili-Resume.pdf'

export default function Resume() {
  const downloadResume=<button className="download-resume">Download Resume</button>;
  return (
    <div className="resume-container" name="resume">
      <h1 className="resume-heading">Resume</h1>
      {downloadResume}
      <embed src={resumePDF} width={"100%"} height={700}/>
      {downloadResume}
    </div>
  )
}
