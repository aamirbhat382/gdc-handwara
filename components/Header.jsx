function Header() {
  return (
    <div className="bg-dark ">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Brand
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  {" "}
                  <a className="nav-link" href="#">
                    Home{" "}
                  </a>{" "}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    About College{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Library{" "}
                  </a>
                </li>
                <li className="nav-item dropdown has-megamenu">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    Menu{" "}
                  </a>
                  <div className="dropdown-menu megamenu" role="menu">
                    <div className="row g-3">
                      <div className="col-lg-3 col-6">
                        <div className="col-megamenu">
                          <h6 className="title">SERVICES</h6>
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="nav-link-item"
                                href="course_view.php"
                                title="Course"
                              >
                                View My Courses
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item"
                                href="course_view_capacity.php"
                                title="Course"
                              >
                                View Seat Capacity
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item"
                                href="Header/sclub.html"
                                title="S Club"
                              >
                                Science Club
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item"
                                href="Header/certificates_main.html"
                                title="S Club"
                              >
                                Certificates
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item"
                                href="Header/tt.html"
                                title="Time Table"
                              >
                                Time Tables
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item"
                                href="Header/cc_cell.html"
                                title="Career Counseling Cell"
                              >
                                Career Counseling Cell
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item"
                                href="Header/gr_cell.html"
                                title="Grievance Redressal Cell"
                              >
                                Grievance Redressal Cell
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item"
                                href="Header/canteen.html"
                                title="Canteen"
                              >
                                Canteen
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item"
                                href="Header/ignousc.html"
                                title="IGNOU Study Center"
                              >
                                IGNOU Study Center
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6">
                        <div className="col-megamenu">
                          <h6 className="title">OTHER</h6>
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="nav-link-item"
                                href="Header/ib_centre.html"
                                title="Internet Browsing Centre"
                              >
                                Internet Browsing Centre
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item"
                                href="Header/wc_cell.html"
                                title="Women Consultancy Cell"
                              >
                                Women Consultancy Cell
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item"
                                href="Header/fin_assistance.html"
                                title="Scholarship &amp; Financial Assistance"
                              >
                                Scholarship &amp; Financial Assistance
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item"
                                href="Header/sports.html"
                                title="Sports"
                              >
                                Sports
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item"
                                href="Header/healthcare.html"
                                title="Health Care"
                              >
                                Health Care
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item"
                                href="Header/Colleges.html"
                                title="Transport Facility"
                              >
                                Transport Facility
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item"
                                href="Header/nss.html"
                                title="NSS"
                              >
                                NSS
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item"
                                href="Header/ncc.html"
                                title="NCC"
                              >
                                NCC
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6">
                        <div className="col-megamenu">
                          <h6 className="title">ADMISSIONS</h6>
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="nav-link-item "
                                href="/images/PreScanQR.pdf"
                                title="Admisson Notice"
                                target="_new"
                              >
                                {" "}
                                Admission 2022
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item "
                                href="../notice/Merit List 04-07-2022 03.25pm.pdf"
                                target="_new"
                                title="Revised Merit List"
                              >
                                Revised Merit List
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item "
                                href="Admission2019/Fee.html"
                                title="College Fee"
                              >
                                College Fee
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item "
                                href="Header/rule.html"
                                title="Rules and Regulations"
                              >
                                Rules and Regulations
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item "
                                href="Header/uniform.html"
                                title="College Uniform"
                              >
                                College Uniform
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item "
                                href="Header/codeofconduct.html"
                                title="Code of Conduct/Discipline"
                              >
                                Code of Conduct/Discipline
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item "
                                href="Header/admissioncommittee.html"
                                title="Admission Committe"
                              >
                                Admission Committe
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6">
                        <div className="col-megamenu">
                          <h6 className="title">ACADEMICS</h6>
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="nav-link-item"
                                href="Header/faculties.html"
                                title="Faculties"
                              >
                                Schools
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item"
                                href="Header/coursesoffered.html"
                                title="Courses Offered"
                              >
                                Courses Offered
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-link-item"
                                href="Header/calender.jpg"
                                title="Academic Calander"
                              >
                                Academic Calender 2019
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Results{" "}
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    NAAC{" "}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        AQARs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        IQAC Meetings{" "}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;


