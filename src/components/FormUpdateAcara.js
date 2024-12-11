import { useState, useEffect, useRef } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { getMyEvents, updateEvents } from "../api/Api"; 
import { ToastContainer, toast, Slide } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

function FormUpdateAcara() {
  const { id } = useParams(); // Mengambil id dari URL parameter
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); // Menyimpan file gambar
  const [date, setDate] = useState("");
  const [imagePreview, setImagePreview] = useState(null); // Menyimpan URL preview gambar

  // Ref untuk input file
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMyEvents(id);
        if (response.data && Array.isArray(response.data.data)) {
          // Mencari acara berdasarkan id
          const acara = response.data.data.find((a) => a.id === id);
          if (acara) {
            setTitle(acara.title);
            setDescription(acara.description);
            setDate((acara.date));
            setImage(acara.image);
            setImagePreview(acara.image);
          } else {
            console.log("Acara tidak ditemukan dengan id:", id);
          }
        } else {
          console.error("Data yang diterima bukan array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, [id]); // Efek dijalankan setiap kali id berubah

  const updateAcara = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("date", date);

      const response = await updateEvents(id, formData);
      console.log("Respons dari server:", response.data);
      toast.success("Acara berhasil diperbarui!", {
        position: "top-right",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        autoClose: 2000,
      });

      setTitle("");
      setDescription("");
      setDate("");
      setImage(null);
      setImagePreview(null);

      setTimeout(() => navigate("/manajemen-acara"), 2000);

      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    } catch (error) {
      console.error(
        "Error dari server:",
        error.response?.data?.message || error.response?.data || error
      );
    }
  };

  // Fungsi untuk menangani perubahan gambar
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <Container>
      <Form onSubmit={updateAcara}>
        <Form.Group controlId="formJudulAcara">
          <Form.Label>Judul Acara</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Judul Acara"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mt-5">
          <Form.Label>Unggah Foto</Form.Label>
          <Form.Control
            type="file"
            onChange={handleImageChange}
            ref={fileInputRef}
          />
        </Form.Group>

        {imagePreview && (
          <div className="mt-3">
            <p>Preview Foto</p>
            <img
              src={imagePreview}
              alt="Preview"
              style={{ width: "300px", maxHeight: "500px" }}
            />
          </div>
        )}

        <Form.Group controlId="date" className="mt-5">
          <Form.Label>Tanggal Acara</Form.Label>
          <Form.Control
            type="date"
            placeholder="Pilih Tanggal Acara Diselenggarakan"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mt-5" controlId="acara.ControlTextarea1">
          <Form.Label>Deskripsi Acara</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Masukkan Deskripsi Acara"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <div className="d-flex justify-content-end mt-5">
          <Button type="submit">Kirim</Button>
        </div>
      </Form>
      <ToastContainer />
    </Container>
  );
}

export default FormUpdateAcara;
