import NavBar from "../Nav/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="bg-gray-800 h-screen ml-16 flex-1 p-4">{children}</div>
    </>
  );
}
