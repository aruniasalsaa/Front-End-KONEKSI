import { useState, useEffect } from 'react';
import { getEventsToBeVerified } from '../api/Api';
import TabelVerifikasiAcara from "../components/TabelVerifikasiAcara";
import OffcanvasDashboard from "../components/OffcanvasDashboard";
import { useGlobal } from "../context/GlobalContext";

function VerifikasiAcaraProdi() {
    const { globalData } = useGlobal(); // Ambil data global
    const username = globalData.username; // Ambil username dari context

    const [acara, setAcara] = useState([]);
    useEffect(() => {
        const fetchAcara = async () => {
            try {
                const response = await getEventsToBeVerified(); // Ambil data berita dari API
                console.log(response.data); // Cek data yang diterima dari API

                // Ambil data berita dari respons API
                const acaraArray = response.data.data;

                if (Array.isArray(acaraArray)) {
                    const acaraData = acaraArray
                        .filter(item => item.authorName !== username) // Filter berdasarkan username
                        .map(item => ({
                            id: item.id,
                            title: item.title,
                            image: item.image,
                            content: item.description,
                            createdAt: item.createdAt,
                            authorName: item.author.username,
                            date: item.date
                        }));
                    setAcara(acaraData); // Update state dengan data berita
                } else {
                    console.error("Data yang diterima bukan array:", acaraArray);
                }
            } catch (error) {
                console.error("Error fetching program: ", error);
            }

        };

        fetchAcara();
    }, [username]);

    return (
        <>
            <OffcanvasDashboard />
            <TabelVerifikasiAcara acaraProdi={acara} />
        </>
    )
}

export default VerifikasiAcaraProdi;