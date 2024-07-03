import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <span>MintLeaves.</span>
        <div className="social">
            <a href="">
                <img src="/facebook.png" alt="facebook-icon" />
            </a>
            <a href="">
                <img src="/instagram.png" alt="instagram-icon" />
            </a>
            <a href="">
                <img src="/github.png" alt="github-icon" />
            </a>
            <a href="">
                <img src="/linkedin.png" alt="linkedin-icon" />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
