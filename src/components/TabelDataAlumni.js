import {
  Container,
  Table,
  Form,
  InputGroup,
  Dropdown,
  Row,
  Col,
  Modal,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import { useGlobal } from "../context/GlobalContext";
import "../styles/tabel.css";

function TabelDataAlumni() {
  const { globalData } = useGlobal();
  const userRole = globalData.role;

  const [kategori, setKategori] = useState("");
  const [detailKategori, setDetailKategori] = useState("");

  const [detailModalShow, setDetailModalShow] = useState(false);
  const [selectedDataAlumni, setSelectedDataAlumni] = useState(null);

  const handleCloseDetailModal = () => setDetailModalShow(false);

  const handleRadioChange = (event) => {
    setKategori(event.target.value);
    setDetailKategori(""); // Reset detailKategori saat kategori berubah
  };

  const handleDropdownChange = (option) => {
    setDetailKategori(option);
  };

  const getDropdownOptions = () => {
    switch (kategori) {
      case "Fakultas":
        return [
          "Kedokteran",
          "Kedokteran Gigi",
          "Teknologi Informasi",
          "Ekonomi dan Bisnis",
          "Hukum",
          "Psikologi",
          "Sekolah Pasca Sarjana",
        ];
      case "Program Studi":
        return [
          "Kedokteran",
          "Kedokteran Gigi",
          "Teknik Informatika",
          "Perpustakaan dan Sains Informasi (PdSI)",
          "Manajemen",
          "Akuntansi",
          "Hukum",
          "Psikologi",
        ];
      case "Sekolah Pascasarjana":
        return [
          "Magister Manajemen",
          "Magister Kenotariatan",
          "Magister Biomedis",
          "Magister Administrasi Rumah Sakit",
          "Magister Sains Biomedis",
        ];
      default:
        return [];
    }
  };

  const handleShowDetail = (dataAlumni) => {
    setSelectedDataAlumni(dataAlumni);
    setDetailModalShow(true);
  };

  return (
    <Container>
      <p>Cari data alumni berdasarkan pilihan berikut!</p>
      <div className="mb-3">
        <Row>
          {userRole === "admin_universitas" && (
            <Col lg="3" sm="6" className="mt-3">
              <Form.Check
                inline
                label="Fakultas"
                name="kategori"
                type="radio"
                id="radio-fakultas"
                value="Fakultas"
                onChange={handleRadioChange}
                checked={kategori === "Fakultas"}
              />
            </Col>
          )}

          {(userRole === "admin_universitas" || userRole === "alumni") && (
            <Col lg="3" sm="6" className="mt-3">
              <Form.Check
                inline
                label="Program Studi"
                name="kategori"
                type="radio"
                id="radio-prodi"
                value="Program Studi"
                onChange={handleRadioChange}
                checked={kategori === "Program Studi"}
              />
            </Col>
          )}

          {userRole === "admin_universitas" && (
            <Col lg="3" sm="6" className="mt-3">
              <Form.Check
                inline
                label="Sekolah Pascasarjana"
                name="kategori"
                type="radio"
                id="radio-pascasarjana"
                value="Sekolah Pascasarjana"
                onChange={handleRadioChange}
                checked={kategori === "Sekolah Pascasarjana"}
              />
            </Col>
          )}

          {(userRole === "admin_universitas" ||
            userRole === "admin_prodi" ||
            userRole === "alumni") && (
            <Col lg="3" sm="6" className="mt-3">
              <Form.Check
                inline
                label="Tahun Lulus"
                name="kategori"
                type="radio"
                id="radio-tahun"
                value="Tahun Lulus"
                onChange={handleRadioChange}
                checked={kategori === "Tahun Lulus"}
              />
            </Col>
          )}
        </Row>

        <Row className="mt-5">
          <Col lg="6" sm="12">
            {kategori === "Tahun Lulus" || userRole === "admin_prodi" ? (
              <InputGroup className="mb-3">
                <InputGroup.Text id="search-year">
                  <i className="fa-solid fa-calendar"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Masukkan Tahun Lulus"
                  aria-label="Tahun Lulus"
                  aria-describedby="search-year"
                  value={detailKategori}
                  onChange={(e) => setDetailKategori(e.target.value)}
                  disabled={
                    userRole === "admin_prodi" && kategori !== "Tahun Lulus"
                  }
                />
              </InputGroup>
            ) : (
              <Dropdown className="mb-3 w-100">
                <Dropdown.Toggle
                  variant="primary"
                  id="dropdown-basic"
                  disabled={!kategori}
                  className="w-100 text-start dropdown-toggle-right"
                >
                  {detailKategori || "Pilih Kategori"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {getDropdownOptions().map((option, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleDropdownChange(option)}
                    >
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Col>

          <Col>
            <InputGroup lg="6" sm="12">
              <InputGroup.Text id="search-data-alumni">
                <i className="fa-solid fa-magnifying-glass"></i>
              </InputGroup.Text>
              <Form.Control
                placeholder="Cari Data Alumni"
                aria-label="Data Alumni"
                aria-describedby="search-data-alumni"
              />
            </InputGroup>
          </Col>
        </Row>
      </div>

      <Table striped bordered hover className="custom-table mt-5">
        <thead className="text-center">
          <tr>
            <th style={{ width: "50px" }}>No.</th>
            <th style={{ width: "100px" }}>NPM</th>
            <th style={{ width: "250px" }}>Nama</th>
            <th style={{ width: "150px" }}>Fakultas</th>
            <th style={{ width: "150px" }}>Prodi</th>
            <th style={{ width: "100px" }}>Tahun Lulus</th>
            <th style={{ width: "150px" }}>Pekerjaan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center" style={{ cursor: "pointer" }}>
              1
            </td>
            <td style={{ cursor: "pointer" }}>1402022010</td>
            <td style={{ cursor: "pointer" }}>Arunia Salsanur Fais</td>
            <td style={{ cursor: "pointer" }}>Teknologi Informasi</td>
            <td
              className="text-center align-middle"
              style={{ cursor: "pointer" }}
            >
              Teknik Informatika
            </td>
            <td className="text-center" style={{ cursor: "pointer" }}>
              2024
            </td>
            <td style={{ cursor: "pointer" }}>Front-end Developer</td>
          </tr>
        </tbody>
      </Table>

      <Modal
        show={detailModalShow}
        onHide={handleCloseDetailModal}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{"Detail Berita"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className="text-center">{selectedDataAlumni?.title}</h3>
          <p className="text-center">
            Dibuat oleh: {selectedDataAlumni?.authorName}
          </p>
          {selectedDataAlumni?.image && (
            <div className="d-flex justify-content-center mb-5">
              <img
                src={selectedDataAlumni.image}
                alt={selectedDataAlumni.title}
                style={{
                  width: "50%",
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
              />
            </div>
          )}
          <p style={{ textAlign: "justify" }}>{selectedDataAlumni?.content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetailModal}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default TabelDataAlumni;
