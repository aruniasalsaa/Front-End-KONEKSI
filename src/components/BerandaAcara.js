import { Container, Col, Row, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function BerandaAcara({ acara }) {
    const navigate = useNavigate();

    return (
        <Container className='beranda-container'>
            <h4 className='beranda-title'>
                ACARA MENDATANG
            </h4>
            <hr className='custom-hr' />
            <Row className='acara-card-row'>
                {acara.map((berandaAcara, index) => (
                    <Col xs={6} md={3} key={index}>
                        <Card className="text-white mt-4"
                            style={{ cursor: 'pointer' }} // Menambahkan pointer saat di-hover
                            onClick={() => navigate(`/detail-acara/${berandaAcara.id}`)} >
                            <Card.Img src={berandaAcara.image} className="image-acara" />
                            <Card.ImgOverlay className='custom-overlay'>
                                <Card.Title className="title-bg">{berandaAcara.date}</Card.Title>
                                {/* <Card.Text className="text-bg">
                                    {berandaAcara.createdAt}
                                </Card.Text> */}
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BerandaAcara;
