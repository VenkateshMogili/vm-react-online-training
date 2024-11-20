import { useParams } from "react-router-dom"

export default function Album() {
 const {albumId}= useParams();
  return (
    <div>Single Album {albumId}</div>
  )
}
