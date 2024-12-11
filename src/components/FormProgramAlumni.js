import { Form, Container, Button, Dropdown } from 'react-bootstrap';
import { postProgramAlumni } from '../api/Api';
import { useState, useRef } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';

function FormProgramAlumni() {
    const [title, setTitle] = useState('');
    const [description, setDescirption] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState(''); // Menyimpan kategori dengan format yang benar
    const [imagePreview, setImagePreview] = useState(null); // Menyimpan URL preview gambar

    // Ref untuk input file
    const fileInputRef = useRef(null);

    const [kategori, setKategori] = useState('Kategori Informasi');

    // Fungsi untuk memetakan kategori yang dipilih
    const mapCategory = (category) => {
        const categoryMap = {
            "Lowongan Kerja": "Lowongan_Kerja",
            "Reuni": "Reuni",
            "Penggalangan Dana": "Penggalangan_Dana",
            "Sesi Berbagi Pengalaman": "Sesi_Berbagi_Pengalaman"
        };
        return categoryMap[category] || ''; // Default empty string jika tidak ada kategori yang dipilih
    };

    const handleSelect = (eventKey) => {
        setKategori(eventKey); // Memperbarui kategori berdasarkan pilihan pengguna
        setCategory(mapCategory(eventKey)); // Mengubah kategori menjadi format yang sesuai dengan backend
    };

    const tambahProgramAlumni = async (e) => {
        e.preventDefault();
        try {
            const response = await postProgramAlumni(title, description, image, category);
            console.log("Respons dari server: ", response.data);
            toast.success("Program Alumni berhasil ditambahkan!", {
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

            // Reset form setelah berhasil kirim data
            setTitle('');
            setDescirption('');
            setCategory('');
            setKategori('Kategori Informasi');
            setImage(null);
            setImagePreview(null);

            // Reset input file secara manual
            if (fileInputRef.current) {
                fileInputRef.current.value = null;
            }
        } catch (error) {
            console.error("Error dari server: ", error.response.data.message || error.response.data);
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
            <Form onSubmit={tambahProgramAlumni}>
                <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {kategori}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="Lowongan Kerja">Lowongan Kerja</Dropdown.Item>
                        <Dropdown.Item eventKey="Reuni">Reuni</Dropdown.Item>
                        <Dropdown.Item eventKey="Penggalangan Dana">Penggalangan Dana</Dropdown.Item>
                        <Dropdown.Item eventKey="Sesi Berbagi Pengalaman">Sesi Berbagi Pengalaman</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Form.Group controlId="formJudulProgram" className='mt-5'>
                    <Form.Label>Judul Program Alumni</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Masukkan Judul Program Alumni"
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
                            style={{ width: '300px', maxHeight: '500px' }}
                        />
                    </div>
                )}

                <Form.Group className="mt-5" controlId="program.ControlTextarea1">
                    <Form.Label>Deskripsi Program Alumni</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Masukkan Deskripsi Program Alumni"
                        value={description}
                        onChange={(e) => setDescirption(e.target.value)}
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

export default FormProgramAlumni;
