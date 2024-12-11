import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { getMyNews } from "../api/Api";
import DisplayDetailBeritaDashboard from "../components/DisplayDetailBeritaDashboard";
import { useParams } from "react-router-dom";
import '../styles/detailInformasi.css'

function DetailManajemenBerita() {
    const { id } = useParams();
    const [berita, setBerita] = useState({});

    useEffect(() => {
        const fetchBerita = async () => {
            try {
                const response = await getMyNews();
                console.log(response.data);

                const beritaItem = response.data.data.find(item => item.id === id);

                if (beritaItem) {
                    setBerita(beritaItem);
                } else {
                    console.error("Berita dengan ID ini tidak ditemukan");
                }
            } catch (error) {
                console.error("Error fetching news: ", error);
            }
        };
        fetchBerita();
    }, [id]);

    // Memeriksa apakah berita sudah lengkap sebelum dirender
    if (!berita.title || !berita.image || !berita.content || !berita.createdAt) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
        <>
            <DisplayDetailBeritaDashboard berita={berita}/>
        </>
    );
}

export default DetailManajemenBerita;