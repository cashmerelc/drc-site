import NavBar from "../Nav/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="bg-gray-800 h-screen">{children}</main>
    </>
  );
}
