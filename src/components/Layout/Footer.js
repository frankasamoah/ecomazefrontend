import { Link } from "react-router-dom";
import {
  BsGem,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsTwitter,
  BsGoogle,
  BsInstagram,
  BsFillEnvelopeAtFill,
  BsFillTelephoneForwardFill,
} from "react-icons/bs";
import { FaHome, FaPrint } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            href="#!"
            className="me-4 text-reset"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            href="#!"
            className="me-4 text-reset"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
          <a
            href="#!"
            className="me-4 text-reset"
            target="_blank"
            rel="noreferrer"
          >
            <BsGoogle />
          </a>
          <a
            href="#!"
            className="me-4 text-reset"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            href="#!"
            className="me-4 text-reset"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/frankasamoah"
            className="me-4 text-reset"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3 ">
            <div
              md="3"
              lg="4"
              xl="3"
              className="mx-auto mb-md-0 mb-4 col-sm-3"
            >
              <div className="w-75 mx-auto">
                <h6 className="text-uppercase fw-bold mb-4">
                  <BsGem className="d-lg-inline-flex me-3 " />
                  Ecomaze
                </h6>
                <p>
                  Most advanced shopping experience using AI. The
                  recommendations are out of this world
                </p>
              </div>
            </div>

            <div
              md="2"
              lg="2"
              xl="2"
              className="mx-auto mb-md-0 mb-4 col-sm-3"
            >
              
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Node.js
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  HTML5
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  CSS3
                </a>
              </p>
              
            </div>

            <div
              md="3"
              lg="2"
              xl="2"
              className="mx-auto mb-md-0 mb-4 col-sm-3"
            >
              
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link
                  to="/about"
                  style={{
                    color: "#757575",
                  }}
                >
                  About
                </Link>
              </p>

              <p>
                <Link
                  to="/policy"
                  style={{
                    color: "#757575",
                  }}
                >
                  Privacy Policy
                </Link>
              </p>
              
            </div>

            <div
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-md-0 mb-4 col-sm-3"
            >
             
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FaHome className="me-2" />
                Dortmund, NRW 44137, DE
              </p>
              <p>
                <BsFillEnvelopeAtFill className="me-2" />
                info@ecomaze.com
              </p>
              <p>
                <BsFillTelephoneForwardFill className="me-2" /> + 49 234 567
                8801
              </p>
              <p>
                <FaPrint className="me-2" /> + 49 234 567 8991
              </p>
            </div>
            
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://franklyfrank-web.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          https://franklyfrank-web.netlify.app
        </a>
      </div>
    </div>
  );
};

export default Footer;
