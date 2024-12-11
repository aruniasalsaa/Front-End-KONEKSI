import { Card, Col, Row, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function BeritaCards({ berita, columnCount }) {
    const navigate = useNavigate();

    return (
        <Container className='container-berita'>
            <Row xs={1} md={2} xl={columnCount}>
                {berita.map((displayBerita) => ( 
                    <Col key={displayBerita.id}>
                        <Card className='card-style'>
                            <Card.Img variant="top" src={displayBerita.image} className='card-image'/>
                            <Card.Body className='body-card'>
                                <p className='text-end'>{displayBerita.createdAt}</p>
                                <Card.Title className="custom-text">{displayBerita.title}</Card.Title>
                                <Card.Text className='custom-text'>
                                {displayBerita.content 
                                        ? (
                                            <>
                                                {displayBerita.content.length > 100 
                                                    ? displayBerita.content.substring(0, 100)
                                                    : displayBerita.content}
                                                <span 
                                                    style={{ textDecoration: 'underline', cursor: 'pointer' }} 
                                                    onClick={() => navigate(`/detail-berita/${displayBerita.id}`)}
                                                >
                                                    Baca selengkapnya
                                                </span>
                                            </>
                                        )
                                        : "Deskripsi tidak tersedia"}
                                </Card.Text>
                                <p className='text-end'>{displayBerita.authorId}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BeritaCards;
