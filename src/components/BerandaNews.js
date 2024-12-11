import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../styles/beranda.css";

function BerandaNews({ berita }) {
    const navigate = useNavigate();

    return (
        <Container className='beranda-container'>
            <h4 className='beranda-title'>
                BERITA
            </h4>
            <hr className='custom-hr' />
            <Row className="justify-content-center mt-4" >
                {berita.map((berandaNews) => (
                    <Col md={4} className='beranda-card d-flex justify-content-center' key={berandaNews.id}>
                        <Card style={{ width: '30rem' }} className='mt-4'>
                            <Card.Img variant="top" src={berandaNews.image} alt={`Image for ${berandaNews.title}`} className='card-image' />
                            <Card.Body className="card-body">
                                {/* Menampilkan nama penulis jika ada */}
                                <p>{berandaNews.authorName}</p>
                                <Card.Title className='text-style'>{berandaNews.title}</Card.Title>
                                <Card.Text className='text-style'>
                                    {berandaNews.content.length > 100 ? `${berandaNews.content.substring(0, 100)}...` : berandaNews.content}
                                </Card.Text>
                                <Button className='button-card' onClick={() => navigate(`/detail-berita/${berandaNews.id}`)}>
                                    Baca Selengkapnya
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BerandaNews;