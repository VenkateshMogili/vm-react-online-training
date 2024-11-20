import { useParams } from "react-router-dom"

export default function Song() {
  const {songId,authorId} = useParams();
  return (
    <div>Song {songId} and Author {authorId}</div>
  )
}
