import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { getNews } from "../api/Api";
import DisplayDetailBerita from "../components/DisplayDetailBerita";
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import '../styles/detailInformasi.css'

function DetailBerita() {
    const { id } = useParams();
    const [berita, setBerita] = useState({});

    useEffect(() => {
        const fetchBerita = async () => {
            try {
                const response = await getNews();
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
            <NavigationBar />
            <DisplayDetailBerita berita={berita} />
        </>
    );
}

export default DetailBerita;