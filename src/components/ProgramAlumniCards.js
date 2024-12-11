import { Card, Col, Row, Container, Dropdown, DropdownButton } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ProgramAlumniCards({ program, columnCount }) {
    const navigate = useNavigate();
    const location = useLocation();

    const [dropdownTitle, setDropdownTitle] = useState('Kategori Program Alumni');
    const [selectedCategory, setSelectedCategory] = useState("Semua");

    useEffect(() => {
        // Inisialisasi kategori dari URL
        const params = new URLSearchParams(location.search);
        const categoryFromQuery = params.get('category');  
        
        if (categoryFromQuery) {
            setSelectedCategory(categoryFromQuery);  
            setDropdownTitle(formatCategoryLabel(categoryFromQuery)); // Update dropdown title
        }
    }, [location]); // Menggunakan `location` sebagai dependensi agar efisien

    // Fungsi untuk memformat label dropdown sesuai kategori
    const formatCategoryLabel = (category) => {
        switch (category) {
            case "Lowongan_Kerja":
                return "Lowongan Kerja";
            case "Reuni":
                return "Reuni";
            case "Penggalangan_Dana":
                return "Penggalangan Dana";
            case "Sesi_Berbagi_Pengalaman":
                return "Sesi Berbagi Pengalaman";
            default:
                return "Kategori Program Alumni";
        }
    };

    // Filter program berdasarkan kategori yang dipilih
    const filteredProgram = selectedCategory === "Semua"
        ? program
        : program.filter(displayProgram => displayProgram.category === selectedCategory);

    // Debugging logs
    useEffect(() => {
        console.log("Data Program:", program); // Periksa apakah data `program` memiliki kategori yang sesuai
    }, [program]);

    const handleCategorySelect = (category, label) => {
        setSelectedCategory(category);
        setDropdownTitle(label);
        navigate(`?category=${category}`);  // Update query parameter di URL
    };

    return (
        <Container className='container-berita'>
            <DropdownButton
                id="dropdown-button-dark-example2"
                variant="secondary"
                title={dropdownTitle}
                className="kategori-program"
                data-bs-theme="dark"
                onSelect={(eventKey, event) => handleCategorySelect(eventKey, event.target.textContent)}
            >
                <Dropdown.Item eventKey="Semua" active={selectedCategory === "Semua"}>
                    Semua
                </Dropdown.Item>
                <Dropdown.Item eventKey="Lowongan_Kerja" active={selectedCategory === "Lowongan_Kerja"}>
                    Lowongan Kerja
                </Dropdown.Item>
                <Dropdown.Item eventKey="Reuni" active={selectedCategory === "Reuni"}>
                    Reuni
                </Dropdown.Item>
                <Dropdown.Item eventKey="Penggalangan_Dana" active={selectedCategory === "Penggalangan_Dana"}>
                    Penggalangan Dana
                </Dropdown.Item>
                <Dropdown.Item eventKey="Sesi_Berbagi_Pengalaman" active={selectedCategory === "Sesi_Berbagi_Pengalaman"}>
                    Sesi Berbagi Pengalaman
                </Dropdown.Item>
            </DropdownButton>

            <Row xs={1} md={2} xl={columnCount}>
                {filteredProgram.map((displayProgram) => (
                    <Col key={displayProgram.id}>
                        <Card className='card-style'>
                            <Card.Img variant="top" src={displayProgram.image} className='card-image' />
                            <Card.Body className='body-card'>
                                <p className='text-end'>{displayProgram.createdAt}</p>
                                <Card.Title className="custom-text">{displayProgram.title}</Card.Title>
                                <Card.Text className='custom-text'>
                                    {displayProgram.content
                                        ? (
                                            <>
                                                {displayProgram.content.length > 100
                                                    ? displayProgram.content.substring(0, 100)
                                                    : displayProgram.content}
                                                <span
                                                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                                                    onClick={() => navigate(`/detail-program-alumni/${displayProgram.id}`)}
                                                >
                                                    Baca selengkapnya
                                                </span>
                                            </>
                                        )
                                        : "Deskripsi tidak tersedia"}
                                </Card.Text>
                                <p className='text-end'>{displayProgram.authorId}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProgramAlumniCards;