function nav() {
    return (
        <>
        <nav id="navBar">
        <div className="full-nav">
          <ul className="full-nav-links">
            <li><a href="/index.html">Home</a></li>
            <li><a href="/Pages/gallery.html">Gallery</a></li>
            <li><a href="/Pages/booking.html">Booking</a></li>
          </ul>
          <div className="logo">Beauty by Shulpa</div>
          <button className="contact-btn" type="button">
            <a href="/Pages/booking.html">Book Online!</a>
          </button>
        </div>
        <div className="mobile-nav">
          <div id="clickNav">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul className="nav-list">
              <li><a href="/">Home</a></li>
              <li>
                <a href="/">Bio</a>
              </li>
              <li>
                <a href="/">Gallery</a>
              </li>
              <li>
                <a href="/">Booking</a>
              </li>

              <li className="separator"></li>

              <li><p className="logo-small">Styles By Shulpa ©</p></li>
            </ul>
          </div>
        </div>
      </nav>
      </>
      )
}



export default nav;