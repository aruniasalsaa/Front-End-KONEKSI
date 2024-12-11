import { Container, Stack } from "react-bootstrap";

function DisplayDetailAcaraDashboard({ acara }) {
    return (
        <Container className="mt-5">
            <Stack gap={3}>
                <div className="p-2">
                    <h1 className="custom-title">{acara.title}</h1>
                    <br></br>
                    <p className="custom-date">Diunggah pada: {acara.createdAt}</p>
                    <p className="custom-author">Dibuat oleh: {acara.authorName}</p>
                </div>
                <div>
                    <img src={acara.image} alt={acara.title} style={{
                        width: '50%',
                        height: '300px',
                        display: 'block',
                        margin: '0 auto',
                    }} />
                </div>
                <div className="p-2">
                    <p className="custom-description">{acara.description}</p>
                </div>
            </Stack>
        </Container>
    );
}

export default DisplayDetailAcaraDashboard;