import {
  Container,
  Table,
  Button,
  DropdownButton,
  Dropdown,
  Modal,
} from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { verifyProgramAlumni } from "../api/Api";
import { toast } from "react-toastify";

function TabelVerifikasiProgramAlumni({ program }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProgramAlumniId, setSelectedProgramAlumniId] = useState(null);

  const [detailModalShow, setDetailModalShow] = useState(false);
  const [selectedProgramAlumni, setSelectedProgramAlumni] = useState(null);

  const handleClose = () => setShow(false);
  const handleCloseDetailModal = () => setDetailModalShow(false);

  // Pindahkan semua useState ke bagian atas
  const [dropdownTitle, setDropdownTitle] = useState("Kategori Program Alumni");
  const [selectedCategory, setSelectedCategory] = useState("Semua");


  const [show, setShow] = useState(false);

  // Fungsi untuk verifikasi berita
  const handleVerify = async (id) => {
    try {
      await verifyProgramAlumni(id, "verify");
      toast.success("Program Alumni berhasil disetujui!", {
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Gagal menyetujui Program Alumni.", {
        autoClose: 2000,
      });
    }
  };

  const handleReject = async () => {
    try {
      if (selectedProgramAlumniId) {
        await verifyProgramAlumni(selectedProgramAlumniId, "reject"); 
        toast.success("Program Alumni berhasil ditolak!", {
          autoClose: 2000,
        });
        setShow(false);
      }
    } catch (error) {
      toast.error("Gagal menolak Program Alumni.", {
        autoClose: 2000,
      });
    }
  };

    // Fungsi untuk menampilkan detail berita dalam modal
    const handleShowDetail = (berita) => {
      setSelectedProgramAlumni(berita);
      setDetailModalShow(true);
    };

  // Memasukkan logika untuk inisialisasi kategori langsung ke dalam useEffect
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");

    if (category) {
      setSelectedCategory(category);
      setDropdownTitle(formatCategoryLabel(category));
    } else {
      setSelectedCategory("Semua");
      setDropdownTitle("Kategori Program Alumni");
    }
  }, [location.search]); // Menambahkan location.search sebagai dependensi

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

  // Filter program berdasarkan kategori yang dipilih
  const filteredProgram =
    selectedCategory === "Semua"
      ? program
      : program.filter((item) => item.category === selectedCategory);

  // Periksa apakah program adalah array yang valid
  if (!Array.isArray(program)) {
    return <div>Loading...</div>; // Tampilkan loading jika data belum tersedia
  }

  return (
    <Container>
      <h1 className="text-center">VERIFIKASI PROGRAM ALUMNI</h1>
      <hr className="custom-hr" />
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

      <Table striped bordered hover className="custom-table">
        <thead className="text-center">
          <tr>
            <th style={{ width: "50px" }}>No.</th>
            <th style={{ width: "200px" }}>Judul Program Alumni</th>
            <th style={{ width: "150px" }}>Kategori</th>
            <th style={{ width: "150px" }}>Penulis</th>
            <th style={{ width: "100px" }}>Foto</th>
            <th style={{ width: "300px" }}>Deskripsi</th>
            <th style={{ width: "100px" }}>Status</th>
            <th style={{ width: "150px" }}>Verifikasi</th>
          </tr>
        </thead>
        <tbody>
          {filteredProgram.map((program, index) => (
            <tr key={program.id}>
              <td
                className="text-center"
                onClick={() => handleShowDetail(program)}
                style={{ cursor: "pointer" }}
              >
                {index + 1}
              </td>
              <td
                onClick={() => handleShowDetail(program)}
                style={{ cursor: "pointer" }}
              >
                {program.title.length > 100
                  ? `${program.title.substring(0, 100)}...`
                  : program.title}
              </td>
              <td
                onClick={() => handleShowDetail(program)}
                style={{ cursor: "pointer" }}
              >
                {program.category.replace(/_/g, " ")}
              </td>
              <td
                onClick={() => handleShowDetail(program)}
                style={{ cursor: "pointer" }}
              >
                {program.authorName}
              </td>
              <td
                className="text-center align-middle"
                onClick={() => handleShowDetail(program)}
                style={{ cursor: "pointer" }}
              >
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
              <td
                onClick={() => handleShowDetail(program)}
                style={{ cursor: "pointer" }}
              >
                {program.content.length > 100
                  ? `${program.content.substring(0, 100)}...`
                  : program.content}
              </td>
              <td
                onClick={() => handleShowDetail(program)}
                style={{ cursor: "pointer" }}
              >
                {program.submissionStatus}
              </td>
              <td className="text-center">
                <div className="d-flex gap-2 justify-content-center">
                  <Button 
                  variant="success" 
                  size="sm"
                  onClick={() => handleVerify(program.id)}
                  >
                    Setujui
                  </Button>
                  <Button 
                  variant="danger" 
                  size="sm" 
                  onClick={() => {
                    setSelectedProgramAlumniId(program.id); // Simpan ID program yang akan ditolak
                    setShow(true);
                  }}
                  >
                    Tolak
                    
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal untuk menampilkan detail berita */}
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
          <h3 className="text-center">{selectedProgramAlumni?.title}</h3>
          <p className="text-center">
            Dibuat oleh: {selectedProgramAlumni?.authorName}
          </p>
          {selectedProgramAlumni?.image && (
            <div className="d-flex justify-content-center mb-5">
              <img
                src={selectedProgramAlumni.image}
                alt={selectedProgramAlumni.title}
                style={{
                  width: "50%",
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
              />
            </div>
          )}
          <p style={{ textAlign: "justify" }}>{selectedProgramAlumni?.content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetailModal}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>


      {/* Modal Konfirmasi Tolak */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tolak Pengajuan Berita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Apakah Anda yakin akan menolak pengajuan berita ini?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tidak
          </Button>
          <Button variant="primary" onClick={handleReject}>
            Ya
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default TabelVerifikasiProgramAlumni;
