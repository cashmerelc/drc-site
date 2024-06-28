import { FaHome, FaInfo, FaCode } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 shadow-lg">
      <NavBarIcon icon={<FaHome />} />
      <NavBarIcon icon={<FaInfo />} />
      <NavBarIcon icon={<FaCode />} />
    </div>
  );
}

const NavBarIcon = ({ icon }) => <div className="navbar-icon">{icon}</div>;
