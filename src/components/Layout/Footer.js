import { Link } from "react-router-dom";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (

    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='#!' className='me-4 text-reset' target="_blank" rel="noreferrer">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='#!' className='me-4 text-reset' target="_blank" rel="noreferrer">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='#!' className='me-4 text-reset' target="_blank" rel="noreferrer">
            <MDBIcon fab icon="google" />
          </a>
          <a href='#!' className='me-4 text-reset' target="_blank" rel="noreferrer">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='#!' className='me-4 text-reset' target="_blank" rel="noreferrer">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/frankasamoah' className='me-4 text-reset' target="_blank" rel="noreferrer">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Ecomaze
              </h6>
              <p>
                Most advanced shopping experience using AI. The recommendations are out of this world
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Node.js
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  HTML5
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  CSS3
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
              <Link to="/about" style={{
                color: "#757575"
              }}>About</Link>
              </p>
              
              <p>
              <Link to="/policy" style={{
                color: "#757575"
              }}>Privacy Policy</Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Dortmund, NRW 44137, DE
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@ecomaze.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 49 234 567 8801
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 49 234 567 8991
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://franklyfrank-web.netlify.app' target="_blank" rel="noreferrer">{" "}
        https://franklyfrank-web.netlify.app
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
