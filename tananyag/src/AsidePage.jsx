import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function AsidePage() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="flex-column">
  <NavDropdown title="Python programozás" id="python-dropdown" className="custom-dropdown-menu">
    <NavDropdown.Item href="#python-alapok">Python alapok</NavDropdown.Item>
    <NavDropdown.Item href="#python-függvények">Python függvények</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#python-projektek">Python projektek</NavDropdown.Item>
  </NavDropdown>
  <NavDropdown title="Python programozás" id="python-dropdown">
    <NavDropdown.Item href="#python-alapok">Python alapok</NavDropdown.Item>
    <NavDropdown.Item href="#python-függvények">Python függvények</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#python-projektek">Python projektek</NavDropdown.Item>
  </NavDropdown>
 
</Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AsidePage;