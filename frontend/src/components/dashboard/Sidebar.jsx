import { Link } from "react-router-dom";

function Sidebar() {

  return (
    <>
      <ul
        className="navbar-nav bg-dark sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        
        <Link to="/home">
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="index.html"
          >
            <div className="sidebar-brand-icon">
              <i className="fas fa-lock"></i>
            </div>
            <div className="sidebar-brand-text mx-3">
              Restoran Pujasera
            </div>
          </a>
        </Link>

        <hr className="sidebar-divider" />
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="fas fa-fw fa-cog"></i>
            <span>Daftar Barang</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/kasir" className="nav-link">
            <i className="fas fa-fw fa-cog"></i>
            <span>Daftar Kasir</span>
          </Link>
        </li>
        
    
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </>
  );
}

export default Sidebar;
