
import { Link } from 'react-router-dom'

const NavBar = () => {

      return (
            <>
                  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid " >
                              <Link className="navbar-brand" to="/" >DM News</Link>
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                          <li class="nav-item">
                                                <Link class="nav-link active" aria-current="page" to="/">General</Link>
                                          </li>
                                          <li class="nav-item">
                                                <Link class="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
                                          </li>
                                          <li class="nav-item">
                                                <Link class="nav-link active" aria-current="page" to="/business">Business</Link>
                                          </li>
                                          <li class="nav-item">
                                                <Link class="nav-link active" aria-current="page" to="health">Health</Link>
                                          </li>
                                          <li class="nav-item">
                                                <Link class="nav-link active" aria-current="page" to="/science">Science</Link>
                                          </li>
                                          <li class="nav-item">
                                                <Link class="nav-link active" aria-current="page" to="/sport">Sports</Link>
                                          </li>
                                          <li class="nav-item">
                                                <Link class="nav-link active" aria-current="page" to="/technology">Technology</Link>
                                          </li>

                                    </ul>

                              </div>
                        </div>
                  </nav>

            </>
      )

}

export default NavBar