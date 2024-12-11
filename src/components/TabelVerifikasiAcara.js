import { Container, Table, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { verifyEvents } from "../api/Api";

function TabelVerifikasiAcara({ acaraProdi }) {
  const [show, setShow] = useState(false);
  const [detailModalShow, setDetailModalShow] = useState(false);
  const [selectedAcara, setSelectedAcara] = useState(null); 

  const handleClose = () => setShow(false);
  const handleCloseDetailModal = () => setDetailModalShow(false); 

  if (!Array.isArray(acaraProdi)) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const handleVerify = async (id) => {
    try {
      await verifyEvents(id, "verify"); 
      toast.success("Acara berhasil disetujui!", {
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Gagal menyetujui acara.", {
        autoClose: 2000,
      });
    }
  };

  const handleReject = async () => {
    try {
      if (selectedAcara) {
        await verifyEvents(selectedAcara.id, "reject"); 
        toast.success("Acara berhasil ditolak!", {
          autoClose: 2000,
        });
        setShow(false);
      }
    } catch (error) {
      toast.error("Gagal menolak acara.", {
        autoClose: 2000,
      });
    }
  };

  // Fungsi untuk menampilkan detail acara dalam modal
  const handleShowDetail = (acara) => {
    setSelectedAcara(acara);
    setDetailModalShow(true);
  };

  return (
    <Container>
      <h1 className="text-center">VERIFIKASI ACARA</h1>
      <hr className="custom-hr" />

      <Table striped bordered hover className="custom-table">
        <thead className="text-center">
          <tr>
            <th style={{ width: "50px" }}>No.</th>
            <th style={{ width: "200px" }}>Judul Acara</th>
            <th style={{ width: "150px" }}>Penulis</th>
            <th style={{ width: "100px" }}>Foto</th>
            <th style={{ width: "300px" }}>Deskripsi</th>
            <th style={{ width: "200px" }}>Tanggal Acara</th>
            <th style={{ width: "150px" }}>Verifikasi</th>
          </tr>
        </thead>
        <tbody>
          {acaraProdi.map((acara, index) => (
            <tr key={acara.id}>
              <td
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={() => handleShowDetail(acara)} 
              >
                {index + 1}
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
                onClick={() => handleShowDetail(acara)} 
                style={{ cursor: "pointer" }}
              >
                {formatDate(acara.date)}
              </td>
              <td className="text-center">
                <div className="d-flex gap-2 justify-content-center">
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => handleVerify(acara.id)}
                  >
                    Setujui
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => {
                      setSelectedAcara(acara); // Simpan ID acara yang akan ditolak
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

      {/* Modal untuk menampilkan detail acara */}
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
            <strong>Tanggal Acara:</strong> {formatDate(selectedAcara?.date)}
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

      {/* Modal untuk menolak acara */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tolak Pengajuan Acara</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Apakah Anda yakin akan menolak pengajuan acara ini?
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

export default TabelVerifikasiAcara;
