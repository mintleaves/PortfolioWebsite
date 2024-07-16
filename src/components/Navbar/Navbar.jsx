import Sidebar from "../Sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Sidebar />
        <div className="animated-border-box-glow"></div>
        <div className="wrapper animated-border-box">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transitiion={{ duration: 0.5 }}
          >
             &lt;GrubHTML&#47;&gt;
          </motion.span>
          <div className="social">
            <a href="">
              <img src="/facebook.png" alt="facebook-icon" />
            </a>
            {/* <a href="">
            <img src="/instagram.png" alt="instagram-icon" />
          </a> */}
            <a href="">
              {/* <div className="icon_bg"> */}
              <img src="/github.png" alt="github-icon" />
              {/* </div> */}
            </a>
            <a href="">
              <img src="/linkedin.png" alt="linkedin-icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
