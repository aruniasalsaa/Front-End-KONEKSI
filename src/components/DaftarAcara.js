import { Container, Table, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext"; 
import "../styles/tabel.css"

function DaftarAcara({ daftarAcara, currentPage, itemsPerPage }) {
  const { globalData } = useGlobal(); 
  const { role } = globalData; 
  const navigate = useNavigate();

  const [detailModalShow, setDetailModalShow] = useState(false); 
  const [selectedAcara, setSelectedAcara] = useState(null); 

  const handleCloseDetailModal = () => setDetailModalShow(false); 
  
  // Periksa apakah daftarAcara adalah array yang valid
  if (!Array.isArray(daftarAcara)) {
    return <div>Loading...</div>; 
  }

  // Fungsi untuk menampilkan detail acara dalam modal
  const handleShowDetail = (acara) => {
    setSelectedAcara(acara);
    setDetailModalShow(true);
  };

  return (
    <Container>
      <Table striped bordered hover className="custom-table">
        <thead className="text-center">
          <tr>
            <th style={{ width: "50px" }}>No.</th>
            <th style={{ width: "200px" }}>Judul Acara</th>
            <th style={{ width: "150px" }}>Penulis</th>
            <th style={{ width: "100px" }}>Foto</th>
            <th style={{ width: "300px" }}>Deskripsi</th>
            <th style={{ width: "200px" }}>Tanggal Acara</th>
            <th style={{ width: "150px" }}>
              {role === "admin_universitas" ? "Perbarui" : "Status"}
            </th>
          </tr>
        </thead>
        <tbody>
          {daftarAcara.map((acara, index) => (
            <tr key={acara.id}>
              <td
                className="text-center"
                onClick={() => handleShowDetail(acara)}
                style={{ cursor: "pointer" }}
              >
               {index + 1 + (currentPage - 1) * itemsPerPage}
              </td>
              <td
                onClick={() => handleShowDetail(acara)}
                style={{ cursor: "pointer" }}
              >
                {acara.title.length > 100
                  ? `${acara.title.substring(0, 100)}...`
                  : acara.title}
              </td>
              <td
                onClick={() => handleShowDetail(acara)}
                style={{ cursor: "pointer" }}
              >
                {acara.authorName}
              </td>
              <td
                className="text-center align-middle"
                onClick={() => handleShowDetail(acara)}
                style={{ cursor: "pointer" }}
              >
                {acara.image && (
                  <img
                    src={acara.image}
                    alt={acara.title}
                    style={{
                      width: "90px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                  />
                )}
              </td>
              <td
                onClick={() => handleShowDetail(acara)}
                style={{ cursor: "pointer" }}
              >
                {acara.content.length > 100
                  ? `${acara.content.substring(0, 100)}...`
                  : acara.content}
              </td>
              <td
                className="text-center"
                onClick={() => handleShowDetail(acara)}
                style={{ cursor: "pointer" }}
              >
                {acara.date}
              </td>
              <td className="text-center custom-icon">
                {role === "admin_universitas" ? (
                  <i
                    className="fa-regular fa-pen-to-square"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/perbarui-acara/${acara.id}`)}
                  ></i>
                ) : (
                  <span>{acara.id}</span> // Menampilkan ID acara sebagai Status
                )}
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
          <Modal.Title>{"Detail Acara"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className="text-center">{selectedAcara?.title}</h3>
          <p className="text-center">
            Dibuat oleh: {selectedAcara?.authorName}
          </p>
          <p className=" text-center">
            <strong>Tanggal Acara:</strong> {selectedAcara?.date}
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

export default DaftarAcara;
