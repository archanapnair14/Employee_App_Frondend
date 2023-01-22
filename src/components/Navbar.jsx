import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-md navbar-dark bg-success"
          style={{ padding: "1em" }} 
        >
          <div class="container-fluid">
            <Link to="/" className="navbar-brand" aria-current="page">
              Employee App
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/" className="nav-link  active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/form"
                    className="nav-link  active"
                    aria-current="page"
                  >
                    Add Employee
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
