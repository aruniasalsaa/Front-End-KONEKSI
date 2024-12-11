import { Container, Table, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { activationEvents, broadcastMessage } from "../api/Api";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import "../styles/tabel.css";

function TabelBagikanAcara({ acara, enabledStatus, setEnabledStatus }) {
  const [detailModalShow, setDetailModalShow] = useState(false);
  const [selectedAcara, setSelectedAcara] = useState(null);

  const handleCloseDetailModal = () => setDetailModalShow(false);

  if (!Array.isArray(acara)) {
    return <div>Loading...</div>;
  }

  const handleShowDetail = (item) => {
    setSelectedAcara(item);
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
      await activationEvents(id, action);
      // Perbarui state
      setEnabledStatus((prevState) => ({
        ...prevState,
        [id]: action,
      }));
    } catch (error) {
      console.error("Error updating event status:", error);
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
            <th style={{ width: "150px" }}>Tanggal Acara</th>
            <th style={{ width: "50px" }}>Bagikan</th>
            <th style={{ width: "50px" }}>Display</th>
          </tr>
        </thead>
        <tbody>
          {acara.map((acara, index) => (
            <tr key={acara.id}>
              <td
                className="text-center"
                onClick={() => handleShowDetail(acara)}
                style={{ cursor: "pointer" }}
              >
                {index + 1}
              </td>
              <td onClick={() => handleShowDetail(acara)} style={{ cursor: "pointer" }}>
                {acara.title.length > 100 ? `${acara.title.substring(0, 100)}...` : acara.title}
              </td>
              <td onClick={() => handleShowDetail(acara)} style={{ cursor: "pointer" }}>
                {acara.authorName}
              </td>
              <td className="text-center" onClick={() => handleShowDetail(acara)}>
                {acara.image && <img src={acara.image} alt={acara.title} style={{ width: "90px", height: "70px" }} />}
              </td>
              <td onClick={() => handleShowDetail(acara)}>{acara.content.length > 100 ? `${acara.content.substring(0, 100)}...` : acara.content}</td>
              <td className='text-center' onClick={() => handleShowDetail(acara)}>{acara.date}</td>
              <td className="text-center custom-icon">
              <i
                  className="fa-brands fa-whatsapp"
                  onClick={() => handleWhatsAppBroadcast(acara.title, acara.content)} // Menambahkan handler klik
                  style={{ cursor: "pointer", color: "green" }}
                ></i>
              </td>
              <td className="text-center custom-icon">
                <i
                  className={`fa-regular ${enabledStatus[acara.id] ? "fa-eye" : "fa-eye-slash"}`}
                  onClick={() => toggleEnable(acara.id, enabledStatus[acara.id])}
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
          {selectedAcara && (
            <>
              <h3 className="text-center">{selectedAcara.title}</h3>
              <p className="text-center">
                Dibuat oleh: {selectedAcara.authorName}
              </p>
              {selectedAcara.image && (
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
              <p style={{ textAlign: "justify" }}>{selectedAcara.content}</p>
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

export default TabelBagikanAcara;
