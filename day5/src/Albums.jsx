import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

export default function Albums() {
  const location = useLocation();
  const search=new URLSearchParams(location.search);
  console.log(search.get('album'));
  console.log(search.get('song'));
  return (
    <div>
      <h1>Albums</h1>
      <Link to="/albums/album/1">Album 1</Link>
      <Link to="/albums/album/2">Album 2</Link>
      <NavLink to="/albums/song/1"
        className={({ isActive }) => isActive ? 'active' : ''}>
        Song 1
      </NavLink>
      <NavLink
        to="/albums/song/2"
        className={({ isActive }) => isActive ? 'active' : ''}>
        Song 2
      </NavLink>
      <Outlet />
    </div>
  )
}
