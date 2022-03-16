import { Link } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  {
    title: "About",
    link: "/about",
    id: "header-link-about",
  },
  {
    title: "Movies",
    link: "/movies",
    id: "header-link-movies",
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (<>
    {/* //map through the link ad display it in header */}
    {links.map((e)=>{
      return(
      <Link to={e.link} key={e.id}>{e.title}</Link>)
    })}
    </>)
};
