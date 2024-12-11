import { Container, Table, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { activationNews, broadcastMessage } from "../api/Api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/tabel.css";

function TabelBagikanBerita({ berita, enabledStatus, setEnabledStatus }) {
  const [detailModalShow, setDetailModalShow] = useState(false);
  const [selectedBerita, setSelectedBerita] = useState(null);

  const handleCloseDetailModal = () => setDetailModalShow(false);

  // Periksa apakah berita adalah array yang valid
  if (!Array.isArray(berita)) {
    return <div>Loading...</div>;
  }

  const handleShowDetail = (item) => {
    setSelectedBerita(item);
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
      // Panggil API untuk memperbarui status
      await activationNews(id, action);
      // Perbarui state
      setEnabledStatus((prevState) => ({
        ...prevState,
        [id]: action,
      }));
    } catch (error) {
      console.error("Error updating news status:", error);
    }
  };

  return (
    <Container>
      <Table striped bordered hover className="custom-table">
        <thead className="text-center">
          <tr>
            <th style={{ width: "50px" }}>No.</th>
            <th style={{ width: "200px" }}>Judul Berita</th>
            <th style={{ width: "150px" }}>Penulis</th>
            <th style={{ width: "100px" }}>Foto</th>
            <th style={{ width: "300px" }}>Deskripsi</th>
            <th style={{ width: "50px" }}>Bagikan</th>
            <th style={{ width: "50px" }}>Display</th>
          </tr>
        </thead>
        <tbody>
          {berita.map((item, index) => (
            <tr key={item.id}>
              <td
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={() => handleShowDetail(item)}
              >
                {index + 1}
              </td>
              <td
                onClick={() => handleShowDetail(item)}
                style={{ cursor: "pointer" }}
              >
                {item.title.length > 100
                  ? `${item.title.substring(0, 100)}...`
                  : item.title}
              </td>
              <td
                onClick={() => handleShowDetail(item)}
                style={{ cursor: "pointer" }}
              >
                {item.authorName}
              </td>
              <td
                className="text-center align-middle"
                onClick={() => handleShowDetail(item)}
                style={{ cursor: "pointer" }}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "90px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                  />
                )}
              </td>
              <td
                onClick={() => handleShowDetail(item)}
                style={{ cursor: "pointer" }}
              >
                {item.content.length > 100
                  ? `${item.content.substring(0, 100)}...`
                  : item.content}
              </td>
              <td className="text-center custom-icon">
                <i
                  className="fa-brands fa-whatsapp"
                  onClick={() =>
                    handleWhatsAppBroadcast(item.title, item.content)
                  }
                  style={{ cursor: "pointer", color: "green" }}
                ></i>
              </td>
              <td className="text-center custom-icon">
                <i
                  className={`fa-regular ${
                    enabledStatus[item.id] ? "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={() => toggleEnable(item.id, enabledStatus[item.id])}
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
          {selectedBerita && (
            <>
              <h3 className="text-center">{selectedBerita.title}</h3>
              <p className="text-center">
                Dibuat oleh: {selectedBerita.authorName}
              </p>
              {selectedBerita.image && (
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
              <p style={{ textAlign: "justify" }}>{selectedBerita.content}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetailModal}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </Container>
  );
}

export default TabelBagikanBerita;
