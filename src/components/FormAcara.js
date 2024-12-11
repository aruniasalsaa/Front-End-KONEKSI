import { useState, useRef } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { postEvents } from '../api/Api';
import { ToastContainer, toast, Slide } from 'react-toastify';

function FormAcara() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null); // Menyimpan file gambar
    const [date, setDate] = useState('');
    const [imagePreview, setImagePreview] = useState(null); // Menyimpan URL preview gambar

    // Ref untuk input file
    const fileInputRef = useRef(null);

    // Fungsi untuk menangani pengiriman form
    const tambahAcara = async (e) => {
        e.preventDefault();
        try {
            const response = await postEvents(title, description, image, date);
            console.log("Respons dari server:", response.data);
            toast.success("Acara berhasil ditambahkan!", {
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

            // Reset form setelah berhasil menambahkan berita
            setTitle('');
            setDescription('');
            setDate('');
            setImage(null);
            setImagePreview(null);

            // Reset input file secara manual
            if (fileInputRef.current) {
                fileInputRef.current.value = null;
            }
        } catch (error) {
            console.error("Error dari server:", error.response.data.message || error.response.data);
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
            <Form onSubmit={tambahAcara}> 
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
                    <Form.Label>
                        Unggah Foto</Form.Label>
                    <Form.Control 
                    type="file" 
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    />
                </Form.Group>

                {imagePreview && (
                    <div className='mt-3'>
                        <p>Preview Foto</p>
                        <img 
                        src={imagePreview}
                        alt='Preview'
                        style={{width: '300px', maxHeight: '500px'}}></img>
                    </div>
                )}

                <Form.Group controlId="date" className="mt-5">
                    <Form.Label>
                        Tanggal Acara</Form.Label>
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
                    placeholder="Masukkan Deskripsi Berita" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>

                <div className="d-flex justify-content-end mt-5">
                    <Button type="submit">Kirim</Button>
                </div>
            </Form>
            <ToastContainer/>
        </Container >

    )
}

export default FormAcara;