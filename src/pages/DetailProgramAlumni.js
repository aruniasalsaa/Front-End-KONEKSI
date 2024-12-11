import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { getProgramAlumni } from "../api/Api";
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import '../styles/detailInformasi.css'
import DisplayDetailProgramAlumni from "../components/DisplayDetailProgramAlumni";

function DetailProgramAlumni() {
    const { id } = useParams();
    const [programAlumni, setProgramAlumni] = useState({});

    useEffect(() => {
        const fetchProgramAlumni = async () => {
            try {
                const response = await getProgramAlumni();
                console.log(response.data);

                const programAlumniItem = response.data.data.find(item => item.id === id);

                if (programAlumniItem) {
                    setProgramAlumni(programAlumniItem);
                } else {
                    console.error("Program Alumni dengan ID ini tidak ditemukan");
                }
            } catch (error) {
                console.error("Error fetching news: ", error);
            }
        };
        fetchProgramAlumni();
    }, [id]);

    // Memeriksa program alumni  sudah lengkap sebelum dirender
    if (!programAlumni.title || !programAlumni.image || !programAlumni.description || !programAlumni.createdAt) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
        <>
            <NavigationBar />
            <DisplayDetailProgramAlumni programAlumni={programAlumni} />
        </>
    );
}

export default DetailProgramAlumni;