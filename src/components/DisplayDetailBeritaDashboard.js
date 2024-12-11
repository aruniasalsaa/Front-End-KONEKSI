import { Container, Stack } from "react-bootstrap";

function DisplayDetailBeritaDashboard({ berita }) {
    return (
        <Container className="mt-5">
            <Stack gap={3}>
                <div className="p-2">
                    <h1 className="custom-title">{berita.title}</h1>
                    <br></br>
                    <p className="custom-date">Diunggah pada: {berita.createdAt}</p>
                    <p className="custom-author">Dibuat oleh: {berita.authorName}</p>
                </div>
                <div>
                    <img
                        src={berita.image}
                        alt={berita.title}
                        style={{
                            width: '50%',
                            height: '300px',
                            display: 'block',
                            margin: '0 auto'
                        }} />
                </div>
                <div className="p-2">
                    <p className="custom-description">{berita.content}</p> {/* Menampilkan konten acara */}
                </div>
            </Stack>
        </Container>
    );
}

export default DisplayDetailBeritaDashboard;