import { FaHome, FaInfo, FaCode } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 shadow-lg">
      <NavBarIcon icon={<FaHome />} text="Home" />
      <NavBarIcon icon={<FaInfo />} text="About Me" />
      <NavBarIcon icon={<FaCode />} text="Projects" />
    </div>
  );
}

const NavBarIcon = ({ icon, text }) => (
  <div className="navbar-icon group">
    {icon}

    <span class="navbar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
