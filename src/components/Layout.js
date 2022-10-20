import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import "../routes/Home.css";
function Layout() {
  return (
    <>
      <header className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
      <Outlet />
    </>
  );
}
export default Layout;
