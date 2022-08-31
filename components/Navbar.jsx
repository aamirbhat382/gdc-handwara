function Navbar() {
  return (
    <div className="gdc-header py-3" id="header">
      <div className="header-logo">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-9">
              
              <h6>Govt. Degree College Handwara</h6>
              
            </div>
            <div className="col-3">
              <a href="/">
                <img
                  className="logo-xs"
                  src="/logo.svg"
                  alt="Govt. Degree College Handwara"
                />
              </a>
              </div>
          </div>
        </div>
      </div>
      <div className="header-links"></div>
    </div>
  );
}

export default Navbar;
