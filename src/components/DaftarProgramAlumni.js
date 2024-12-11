import { Container, Table, DropdownButton, Dropdown, Modal, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

function DaftarProgramAlumni({ program }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [detailModalShow, setDetailModalShow] = useState(false);
  const [selectedAcara, setSelectedAcara] = useState(null);

  const handleCloseDetailModal = () => setDetailModalShow(false); 

  // Pindahkan semua useState ke bagian atas
  const [dropdownTitle, setDropdownTitle] = useState("Kategori Program Alumni");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // Fungsi untuk membaca kategori dari URL dan mengatur state
  const initializeCategoryFromURL = useCallback(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");

    if (category) {
      setSelectedCategory(category);
      setDropdownTitle(formatCategoryLabel(category));
    } else {
      setSelectedCategory("Semua");
      setDropdownTitle("Kategori Program Alumni");
    }
  }, [location.search]); // Tambahkan location.search sebagai dependensi

  // Fungsi untuk memformat label dropdown
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

  const handleCategorySelect = (category, label) => {
    setSelectedCategory(category);
    setDropdownTitle(label);
    navigate(`?category=${category}`); // Update query parameter di URL
  };

  // Inisialisasi kategori dari URL saat komponen pertama kali dimuat
  useEffect(() => {
    initializeCategoryFromURL();
  }, [initializeCategoryFromURL]); // Menambahkan initializeCategoryFromURL sebagai dependensi

  // Filter program berdasarkan kategori yang dipilih
  const filteredProgram =
    selectedCategory === "Semua"
      ? program
      : program.filter((item) => item.category === selectedCategory);

  // Periksa apakah program adalah array yang valid
  if (!Array.isArray(program)) {
    return <div>Loading...</div>; // Tampilkan loading jika data belum tersedia
  }

  const handleShowDetail = (program) => {
    setSelectedAcara(program);
    setDetailModalShow(true);
  };

  return (
    <Container>
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        title={dropdownTitle}
        className="kategori-program mb-5 mt-0"
        data-bs-theme="dark"
        onSelect={(eventKey, event) =>
          handleCategorySelect(eventKey, event.target.textContent)
        }
      >
        <Dropdown.Item eventKey="Semua" active={selectedCategory === "Semua"}>
          Semua
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="Lowongan_Kerja"
          active={selectedCategory === "Lowongan_Kerja"}
        >
          Lowongan Kerja
        </Dropdown.Item>
        <Dropdown.Item eventKey="Reuni" active={selectedCategory === "Reuni"}>
          Reuni
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="Penggalangan_Dana"
          active={selectedCategory === "Penggalangan_Dana"}
        >
          Penggalangan Dana
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="Sesi_Berbagi_Pengalaman"
          active={selectedCategory === "Sesi_Berbagi_Pengalaman"}
        >
          Sesi Berbagi Pengalaman
        </Dropdown.Item>
      </DropdownButton>

      <Table striped bordered hover variant="dark" className="custom-table">
        <thead className="text-center">
          <tr>
            <th style={{ width: "50px" }}>No.</th>
            <th style={{ width: "200px" }}>Judul Program Alumni</th>
            <th style={{ width: "150px" }}>Kategori</th>
            <th style={{ width: "150px" }}>Penulis</th>
            <th style={{ width: "100px" }}>Foto</th>
            <th style={{ width: "300px" }}>Deskripsi</th>
            <th style={{ width: "100px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredProgram.map((program, index) => (
            <tr
              key={program.id}
              onClick={() => handleShowDetail(program)}
              style={{ cursor: "pointer" }}
            >
              <td className="text-center">{index + 1}</td>
              <td>
                {" "}
                {program.title.length > 100
                  ? `${program.title.substring(0, 100)}...`
                  : program.title}
              </td>
              <td>{program.category.replace(/_/g, " ")}</td>
              <td>{program.authorName}</td>
              <td className="text-center align-middle">
                {program.image && (
                  <img
                    src={program.image}
                    alt={program.title}
                    style={{
                      width: "90px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                  />
                )}
              </td>
              <td>
                {program.content.length > 100
                  ? `${program.content.substring(0, 100)}...`
                  : program.content}
              </td>
              <td>{program.submissionStatus}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        show={detailModalShow}
        onHide={handleCloseDetailModal}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{"Detail Program Alumni"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className="text-center">{selectedAcara?.title}</h3>
          <p className="text-center">
            Dibuat oleh: {selectedAcara?.authorName}
          </p>
          {selectedAcara?.image && (
            <div className="d-flex justify-content-center mb-5">
              <img
                src={selectedAcara.image}
                alt={selectedAcara.title}
                style={{
                  width: "50%",
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
              />
            </div>
          )}
          <p style={{ textAlign: "justify" }}>{selectedAcara?.content}</p>
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

export default DaftarProgramAlumni;
