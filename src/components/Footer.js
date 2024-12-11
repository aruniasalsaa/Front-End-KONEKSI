import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='main-footer py-3'>
      <Container fluid className='footer-style'>
        <Row>
          <Col lg={{ span: 3, offset: 1 }}>
            <h4>KONEKSI</h4>
            <p>KONEKSI memungkinkan alumni YARSI untuk mengakses data mereka secara real-time. Sistem ini menghubungkan fitur-fitur seperti pusat karier, tracer study, dan penggalangan dana</p>
          </Col>
          <Col lg={{ span: 3, offset: 1 }}>
            <h4>Universitas YARSI</h4>
            <p>Menara YARSI</p>
            <p>Jl. Let. Jend. Suprapto</p>
            <p>Kav. 13. Cempaka Putih, Jakarta Pusat</p>
            <p>DKI Jakarta, 10510</p>
            <p>Indonesia</p>
          </Col>
          <Col lg={{ span: 3, offset: 1 }}>
            <h6>Dikembangkan oleh Millicent</h6>
            <p> <i className="fa-solid fa-globe"></i> www.yarsi.ac.id</p>
            <p> <i className="fa-solid fa-envelope"></i> millicent.tales@gmail.com</p>
            <p> <i className="fa-brands fa-instagram"></i> universitasyarsi</p>
          </Col >
        </Row>
        <div className='footer-bottom text-center mt-5'>
          <p className='text-xs-center'>
            &copy;{new Date().getFullYear()} KONEKSI - All Right Reserved
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;