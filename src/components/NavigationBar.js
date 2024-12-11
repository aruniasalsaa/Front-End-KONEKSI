import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logoYarsi from '../assets/images/logo/logo-yarsi.jpeg';


function NavigationBar() {
    const navigate = useNavigate()
    return (
        <header >
            <Navbar  variant="underline" expand="lg" className="navbar-style fixed-top">
                <Container>
                    <Navbar.Brand className="d-flex align-items-center">
                        <img
                            alt=""
                            src={logoYarsi}
                            width="30"
                            height="30"
                            className="d-inline-block align-top me-2"
                        />
                        <h4 className='navbar-style mb-0'>KONEKSI</h4>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='mx-auto'>
                            <Nav.Link onClick={() => navigate('/')} className='navbar-style'>BERANDA</Nav.Link>
                            <NavDropdown title="TENTANG KAMI" id="basic-nav-dropdown" className='navbar-style'>
                                <NavDropdown.Item onClick={() => navigate('/visi-misi')}>VISI MISI</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link onClick={() => navigate('/berita')} className='navbar-style'>BERITA</Nav.Link>
                            <Nav.Link onClick={() => navigate('/acara')} className='navbar-style'>ACARA</Nav.Link>
                            <Nav.Link onClick={() => navigate('/program-alumni')} className='navbar-style'>PROGRAM ALUMNI</Nav.Link>
                            <Nav.Link className='navbar-style'>TRACER STUDY</Nav.Link>
                        </Nav>
                        <div>
                            <Button onClick={() => navigate('/masuk')} variant="outline-light" size="sm" className="w-100 w-lg-auto mt-3 mt-lg-2 mb-3 mb-lg-2">Masuk</Button>{' '}
                        </div>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>

    );
}

export default NavigationBar;