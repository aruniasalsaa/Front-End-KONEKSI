import { Form, Container, Button } from 'react-bootstrap';
import { postNews } from "../api/Api";
import { useState, useRef } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';

function FormBerita() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    // Ref untuk input file
    const fileInputRef = useRef(null);

    const tambahBerita = async (e) => {
        e.preventDefault();
        try {
            const response = await postNews(title, content, image);
            console.log("Respons dari server: ", response.data);
            toast.success("Berita berhasil ditambahkan!", {
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

            setTitle('');
            setContent('');
            setImage(null);
            setImagePreview(null);

            if (fileInputRef.current) {
                fileInputRef.current.value = null;
            }
        } catch (error) {
            console.error("Error dari server:", error.response.data.message || error.response.data);
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
            <Form onSubmit={tambahBerita}>
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
                            style={{ width: '300px', maxHeight: '500px'}}
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

export default FormBerita;
