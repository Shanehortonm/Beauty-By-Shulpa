
function footer() {
    return (
        <>
        <div className="footer-container">
        <div className="logo-small">Styles by Shulpa</div>
        <ul className="footer-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/">Bio</a></li>
          <li><a href="/">Gallery</a></li>
          <li><a href="/">Booking</a></li>
        </ul>
        <div className="social-media">
          <div className="social-media-wrap">
            <p className="website-rights">© Resume 2023. All rights reserved</p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/"
                className="social-icon-link"
                target="_blank"
                ><i className="fab fa-facebook"></i
              ></a>
              <a
                href="https://www.instagram.com/"
                className="social-icon-link"
                target="_blank"
                ><i className="fab fa-instagram"></i
              ></a>
              <a
                href="https://www.youtube.com/"
                className="social-icon-link"
                target="_blank"
                ><i className="fab fa-youtube"></i
              ></a>
              <a
                href="https://www.linkedin.com/in/shanemhorton/"
                className="social-icon-link"
                target="_blank"
                ><i className="fab fa-linkedin"></i
              ></a>
              <a
                href="https://twitter.com/?lang=en"
                className="social-icon-link"
                target="_blank"
                ><i className="fab fa-twitter"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default footer;