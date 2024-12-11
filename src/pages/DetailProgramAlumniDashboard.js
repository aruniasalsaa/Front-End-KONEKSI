import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { getProgramAlumni } from "../api/Api";
import { useParams } from "react-router-dom";
import '../styles/detailInformasi.css'
import DisplayDetailProgramAlumniDashboard from "../components/DisplayDetailProgramAlumniDashboard";

function DetailProgramAlumniDashboard() {
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
            <DisplayDetailProgramAlumniDashboard programAlumni={programAlumni}/>
        </>
    );
}

export default DetailProgramAlumniDashboard;