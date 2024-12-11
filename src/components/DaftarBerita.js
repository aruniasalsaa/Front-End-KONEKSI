import { Container, Table, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext";
import "../styles/tabel.css"

function DaftarBerita({ daftarBerita, currentPage, itemsPerPage }) {
  const navigate = useNavigate();
  const { globalData } = useGlobal();
  const userRole = globalData.role;

  const [detailModalShow, setDetailModalShow] = useState(false);
  const [selectedBerita, setSelectedBerita] = useState(null);

  const handleCloseDetailModal = () => setDetailModalShow(false);

  if (!Array.isArray(daftarBerita)) {
    return <div>Loading...</div>;
  }

  const handleShowDetail = (berita) => {
    setSelectedBerita(berita);
    setDetailModalShow(true);
  };

  return (
    <Container>
      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th style={{ width: "50px" }}>No.</th>
            <th style={{ width: "200px" }}>Judul Berita</th>
            <th style={{ width: "150px" }}>Penulis</th>
            <th style={{ width: "100px" }}>Foto</th>
            <th style={{ width: "300px" }}>Deskripsi</th>
            <th style={{ width: "50px" }}>
              {userRole === "admin_universitas" ? "Perbarui" : "Status"}
            </th>
          </tr>
        </thead>
        <tbody>
          {daftarBerita.map((berita, index) => (
            <tr key={berita.id}>
              <td
                className="text-center"
                onClick={() => handleShowDetail(berita)}
                style={{ cursor: "pointer" }}
              >
                {index + 1 + (currentPage - 1) * itemsPerPage}
              </td>
              <td
                onClick={() => handleShowDetail(berita)}
                style={{ cursor: "pointer" }}
              >
                {berita.title.length > 100
                  ? `${berita.title.substring(0, 100)}...`
                  : berita.title}
              </td>
              <td
                onClick={() => handleShowDetail(berita)}
                style={{ cursor: "pointer" }}
              >
                {berita.authorName}
              </td>
              <td
                className="text-center align-middle"
                onClick={() => handleShowDetail(berita)}
                style={{ cursor: "pointer" }}
              >
                {berita.image && (
                  <img
                    src={berita.image}
                    alt={berita.title}
                    style={{
                      width: "90px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                  />
                )}
              </td>
              <td
                onClick={() => handleShowDetail(berita)}
                style={{ cursor: "pointer" }}
              >
                {berita.content.length > 100
                  ? `${berita.content.substring(0, 100)}...`
                  : berita.content}
              </td>
              <td className="text-center custom-icon">
                {userRole === "admin_universitas" ? (
                  <i
                    className="fa-regular fa-pen-to-square"
                    onClick={() => navigate(`/perbarui-berita/${berita.id}`)}
                    style={{ cursor: "pointer" }}
                  ></i>
                ) : (
                  <span>{berita.id}</span>
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
          <Modal.Title>{"Detail Berita"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className="text-center">{selectedBerita?.title}</h3>
          <p className="text-center">
            Dibuat oleh: {selectedBerita?.authorName}
          </p>
          {selectedBerita?.image && (
            <div className="d-flex justify-content-center mb-5">
              <img
                src={selectedBerita.image}
                alt={selectedBerita.title}
                style={{
                  width: "50%",
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
              />
            </div>
          )}
          <p style={{ textAlign: "justify" }}>{selectedBerita?.content}</p>
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


export default DaftarBerita;