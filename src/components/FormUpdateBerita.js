import { Form, Container, Button } from "react-bootstrap";
import { getMyNews, updateNews } from "../api/Api";
import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

function FormUpdateBerita() {
  const { id } = useParams(); // Mengambil id dari URL parameter
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // Fetch berita berdasarkan id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMyNews();
        if (response.data && Array.isArray(response.data.data)) {
          const berita = response.data.data.find((b) => b.id.toString() === id); // Pastikan id adalah string
          if (berita) {
            setTitle(berita.title);
            setContent(berita.content);
            setImage(null); 
            setImagePreview(berita.image); 
          } else {
            console.error("Berita tidak ditemukan dengan id:", id);
          }
        } else {
          console.error("Data yang diterima bukan array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, [id]);

  const updateBerita = async (e) => {
    e.preventDefault();
    try {
      const payload = new FormData();
      payload.append("title", title);
      payload.append("content", content);
      if (image) {
        payload.append("image", image); 
      }

      const response = await updateNews(id, payload); 
      console.log("Response update:", response.data);

      toast.success("Berita berhasil diperbarui!", {
        position: "top-right",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Slide,
        autoClose: 2000,
        theme: "light",
      });
      setTitle("");
      setContent("");
      setImage(null);
      setImagePreview(null);

      setTimeout(() => navigate("/manajemen-berita"), 2000);
    } catch (error) {
      console.error(
        "Error saat memperbarui berita:",
        error.response?.data?.message || error.response?.data || error
      );
      toast.error("Gagal memperbarui berita.");
    }
  };

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
      <Form onSubmit={updateBerita}>
        <Form.Group controlId="formJudulBerita">
          <Form.Label>Judul Berita</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Judul Berita"
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
            <p>Preview Foto:</p>
            <img
              src={imagePreview}
              alt="Preview"
              style={{ width: "300px", maxHeight: "500px" }}
            />
          </div>
        )}

        <Form.Group className="mt-5" controlId="berita.ControlTextarea1">
          <Form.Label>Deskripsi Berita</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Masukkan Deskripsi Berita"
            value={content}
            onChange={(e) => setContent(e.target.value)}
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

export default FormUpdateBerita;
