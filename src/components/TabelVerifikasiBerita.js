import { Container, Table, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { verifyNews } from "../api/Api";

function TabelVerifikasiBerita({ beritaProdi }) {
  const [show, setShow] = useState(false);
  const [selectedBeritaId, setSelectedBeritaId] = useState(null); 

  const [detailModalShow, setDetailModalShow] = useState(false); 
  const [selectedBerita, setSelectedBerita] = useState(null); 

  const handleClose = () => setShow(false);
  const handleCloseDetailModal = () => setDetailModalShow(false); 

  if (!Array.isArray(beritaProdi)) {
    return <div>Loading...</div>;
  }

  // Fungsi untuk verifikasi berita
  const handleVerify = async (id) => {
    try {
      await verifyNews(id, "verify"); 
      toast.success("Berita berhasil disetujui!", {
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Gagal menyetujui berita.", {
        autoClose: 2000,
      });
    }
  };


  const handleReject = async () => {
    try {
      if (selectedBeritaId) {
        await verifyNews(selectedBeritaId, "reject"); 
        toast.success("Berita berhasil ditolak!", {
          autoClose: 2000,
        });
        setShow(false);
      }
    } catch (error) {
      toast.error("Gagal menolak berita.", {
        autoClose: 2000,
      });
    }
  };

  // Fungsi untuk menampilkan detail berita dalam modal
  const handleShowDetail = (berita) => {
    setSelectedBerita(berita);
    setDetailModalShow(true);
  };

  return (
    <Container>
      <h1 className="text-center">VERIFIKASI BERITA</h1>
      <hr className="custom-hr" />

      <Table striped bordered hover className="custom-table">
        <thead className="text-center">
          <tr>
            <th style={{ width: "50px" }}>No.</th>
            <th style={{ width: "200px" }}>Judul Berita</th>
            <th style={{ width: "150px" }}>Penulis</th>
            <th style={{ width: "100px" }}>Foto</th>
            <th style={{ width: "300px" }}>Deskripsi</th>
            <th style={{ width: "150px" }}>Verifikasi</th>
          </tr>
        </thead>
        <tbody>
          {beritaProdi.map((berita, index) => (
            <tr key={berita.id}>
              <td
                className="text-center"
                onClick={() => handleShowDetail(berita)}
                style={{ cursor: "pointer" }}
              >
                {index + 1}
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
              <td className="text-center">
                <div className="d-flex gap-2 justify-content-center">
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => handleVerify(berita.id)}
                  >
                    Setujui
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => {
                      setSelectedBeritaId(berita.id); // Simpan ID berita yang akan ditolak
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

export default TabelVerifikasiBerita;
