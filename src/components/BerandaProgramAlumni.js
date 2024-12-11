import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function BerandaProgramAlumni({ programAlumni }) {
    const navigate = useNavigate();

    return (
        <Container className='beranda-container'>
            <h4 className='beranda-title'>
                PROGRAM ALUMNI
            </h4>
            <hr className='custom-hr' />
            <Row className="justify-content-center mt-4" style={{ paddingTop: '10px' }}>
                {programAlumni.map((program) => (
                    <Col md={4} className='beranda-card d-flex justify-content-center' key={program.id}>
                        <Card style={{ width: '30rem' }} className='mt-4'>
                            <Card.Img variant="top" src={program.image} alt={`Image for ${program.title}`} className='card-image' />
                            <Card.Body>
                                <p>{program.authorName}</p>
                                <Card.Title>{program.title}</Card.Title>
                                <Card.Text>
                                {program.content.length > 100 ? `${program.content.substring(0, 100)}...` : program.content}
                                </Card.Text>
                                <Button className='button-card' onClick={() => navigate (`/detail-program-alumni/${program.id}`)}>Baca Selengkapnya</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BerandaProgramAlumni;
