import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Home() {
  const {songId}=useParams();
  const navigate=useNavigate();
  const isLogged = true;
  const songs=[
    'https://samplelib.com/lib/preview/mp3/sample-3s.mp3',
    'https://samplelib.com/lib/preview/mp3/sample-3s.mp3'
  ];

  const handleNavigate=()=>{
    if(isLogged){
      navigate("/albums");
    }
  }
  return (
    <div>
      <button onClick={handleNavigate}>Click here</button>
      {!isLogged && <Navigate to="/albums" />}
      <h1>Home</h1>
      <Link to="/albums">Albums</Link>
      {"  "}
      <Link to="/playlist">Playlist</Link>
      {"  "}
      <Link to="/home/1">Play Song 1</Link>
      {"  "}
      <Link to="/home/2">Play Song 2</Link>

      <div>
        <img src="https://i0.wp.com/tellyflight.com/wp-content/uploads/2023/09/8I9v8yaaknM-HD.jpg?fit=1280%2C720&ssl=1" alt="movie-poster" className="poster-img" />
        <AudioPlayer
          autoPlay
          src={songs[songId]}
        />
      </div>
    </div>
  )
}
