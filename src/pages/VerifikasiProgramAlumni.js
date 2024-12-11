import TabelVerifikasiProgramAlumni from "../components/TabelVerifikasiProgramAlumni";
import { useState, useEffect } from 'react';
import { getProgramAlumniToBeVerified } from '../api/Api';
import OffcanvasDashboard from "../components/OffcanvasDashboard";

function VerifikasiProgramAlumni() {
    const [program, setProgram] = useState([]);
    useEffect(() => {
        const fetchProgram = async () => {
            try {
                const response = await getProgramAlumniToBeVerified(); // Ambil data berita dari API
                console.log(response.data); // Cek data yang diterima dari API

                // Ambil data berita dari respons API
                const programArray = response.data.data;

                if (Array.isArray(programArray)) {
                    const programData = programArray.map(item => ({
                        id: item.id,
                        image: item.image,
                        authorId: item.authorId,
                        title: item.title,
                        content: item.description,
                        createdAt: item.createdAt,
                        category: item.category,
                        authorName: item.author.username,
                        submissionStatus: item.submissionStatus
                    }));
                    setProgram(programData); // Update state dengan data berita
                } else {
                    console.error("Data yang diterima bukan array:", programArray);
                }
            } catch (error) {
                console.error("Error fetching program: ", error);
            }

        };

        fetchProgram();
    }, []);

    return (
        <>
            <OffcanvasDashboard />
            <TabelVerifikasiProgramAlumni program={program} />
        </>
    )
}

export default VerifikasiProgramAlumni;