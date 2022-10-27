import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import "../routes/Home.css";
import useToogle from "lenatooglereacthook";

function Layout() {
  const [isVisible, text, toogleVisible] = useToogle(false);

  return (
    <>
      <header className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
      <button className="main-btn" onClick={toogleVisible}>
        {text}
      </button>
      {isVisible && <Outlet />}
    </>
  );
}
export default Layout;
