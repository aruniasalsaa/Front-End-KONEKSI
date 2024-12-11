import { Card, Col, Row, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AcaraCards({ acara, columnCount }) {
    const navigate = useNavigate();

    return (
        <Container className='container-acara'>
            <Row xs={1} md={2} xl={columnCount} >
                {acara.map((displayAcara) => ( 
                    <Col key={displayAcara.id}>
                        <Card className='card-style'>
                            <Card.Img variant="top" src={displayAcara.image} className='card-image'/>
                            <Card.Body className='body-card'>
                                <p className='text-end'>{displayAcara.createdAt}</p>
                                <Card.Title className="custom-text">{displayAcara.title}</Card.Title>
                                <Card.Text className='custom-text'>
                                    {displayAcara.description 
                                        ? (
                                            <>
                                                {displayAcara.description.length > 100 
                                                    ? displayAcara.description.substring(0, 100)
                                                    : displayAcara.description}
                                                <span 
                                                    style={{ textDecoration: 'underline', cursor: 'pointer' }} 
                                                    onClick={() => navigate(`/detail-acara/${displayAcara.id}`)}
                                                >
                                                    Baca selengkapnya
                                                </span>
                                            </>
                                        )
                                        : "Deskripsi tidak tersedia"}
                                </Card.Text>
                                <p className='text-end'>{displayAcara.author}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AcaraCards;
