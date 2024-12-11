import { Container, Table, DropdownButton, Dropdown, Button, Modal } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { activationProgramAlumni, broadcastMessage } from "../api/Api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/tabel.css";

function TabelBagikanProgramAlumni({ program, enabledStatus, setEnabledStatus  }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [detailModalShow, setDetailModalShow] = useState(false);
  const [selectedProgramAlumni, setSelectedProgramAlumni] = useState(null);
  const handleCloseDetailModal = () => setDetailModalShow(false);

  const handleShowDetail = (item) => {
    setSelectedProgramAlumni(item);
    setDetailModalShow(true);
  };

  const handleWhatsAppBroadcast = async (title, message) => {
    try {
      await broadcastMessage(title, message);
      toast.success("Pesan Broadcast berhasil dikirim!", {
        autoClose: 2000,
      });
    } catch (error) {
      console.error("Error broadcasting message:", error);
      toast.error("Gagal mengirim pesan broadcast.");
    }
  };

  const toggleEnable = async (id, currentStatus) => {
    try {
      const action = !currentStatus; // Toggle status
      await activationProgramAlumni(id, action); // Panggil API untuk memperbarui status di server
      // Perbarui state
      setEnabledStatus((prevState) => ({
        ...prevState,
        [id]: action,
      }));
    } catch (error) {
      console.error("Error updating program status:", error);
    }
  };
  

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
  }, [location.search]); // Menambahkan location.search sebagai dependency

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
  }, [initializeCategoryFromURL]); // Menambahkan initializeCategoryFromURL ke dalam dependency array

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
            <th style={{ width: "50px" }}>Bagikan</th>
            <th style={{ width: "50px" }}>Display</th>
          </tr>
        </thead>
        <tbody>
          {filteredProgram.map((program, index) => (
            <tr
              key={program.id}
              style={{ cursor: "pointer" }}
            >
              <td className="text-center" onClick={() => handleShowDetail(program)}>{index + 1}</td>
              <td onClick={() => handleShowDetail(program)}>
                {program.title.length > 100
                  ? `${program.title.substring(0, 100)}...`
                  : program.title}
              </td>
              <td onClick={() => handleShowDetail(program)}>{program.category.replace(/_/g, " ")}</td>
              <td onClick={() => handleShowDetail(program)}>{program.authorName}</td>
              <td className="text-center align-middle" onClick={() => handleShowDetail(program)}>
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
              <td onClick={() => handleShowDetail(program)}>
                {program.content.length > 100
                  ? `${program.content.substring(0, 100)}...`
                  : program.content}
              </td>
              <td onClick={() => handleShowDetail(program)}>{program.submissionStatus}</td>
              <td className="text-center custom-icon">
                <i
                  className="fa-brands fa-whatsapp"
                  onClick={() =>
                    handleWhatsAppBroadcast(program.title, program.content)
                  }
                  style={{ cursor: "pointer", color: "green" }}
                ></i>
              </td>
              <td className="text-center custom-icon">
                <i
                  className={`fa-regular ${
                    enabledStatus[program.id] ? "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={() => toggleEnable(program.id, enabledStatus[program.id])}
                  style={{ cursor: "pointer" }}
                ></i>
              </td>
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
          <Modal.Title>{"Detail Berita"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProgramAlumni && (
            <>
              <h3 className="text-center">{selectedProgramAlumni.title}</h3>
              <p className="text-center">
                Dibuat oleh: {selectedProgramAlumni.authorName}
              </p>
              {selectedProgramAlumni.image && (
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
              <p style={{ textAlign: "justify" }}>{selectedProgramAlumni.content}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetailModal}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer/>
    </Container>
  );
}

export default TabelBagikanProgramAlumni;