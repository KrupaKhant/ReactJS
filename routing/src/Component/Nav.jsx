import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function nav(){
    return(
        <>
          <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="About" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/about">About</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/about/history">History</NavDropdown.Item>
                  <NavDropdown.Item href="/about/team">
                    Team
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Contact" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/contact/location">Location</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
    )
}

export default nav
