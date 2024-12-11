import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { getEvents } from "../api/Api";
import DisplayDetailAcara from "../components/DisplayDetailAcara";
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import '../styles/detailInformasi.css'

function DetailAcara() {
    const { id } = useParams();
    const [acara, setAcara] = useState({});

    useEffect(() => {
        const fetchAcara = async () => {
            try {
                const response = await getEvents();
                console.log(response.data);

                const acaraItem = response.data.data.find(item => item.id === id);

                if (acaraItem) {
                    setAcara(acaraItem);
                } else {
                    console.error("Acara dengan ID ini tidak ditemukan");
                }
            } catch (error) {
                console.error("Error fetching news: ", error);
            }
        };
        fetchAcara();
    }, [id]);

    // Memeriksa apakah acara sudah lengkap sebelum dirender
    if (!acara.title || !acara.image || !acara.description || !acara.createdAt) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
        <>
            <NavigationBar />
            <DisplayDetailAcara acara={acara} />
        </>
    );
}

export default DetailAcara;