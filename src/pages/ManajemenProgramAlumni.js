import { useState, useEffect } from "react";
import { getProgramAlumni } from "../api/Api";
import OffcanvasDashboard from "../components/OffcanvasDashboard";
import { useGlobal } from "../context/GlobalContext";
import { Container } from "react-bootstrap";
import DaftarProgramAlumni from "../components/DaftarProgramAlumni";

function ManajemenProgramAlumni() {
  const { globalData } = useGlobal();
  const username = globalData?.username;

  const [program, setProgram] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProgramAlumni = async () => {
      setLoading(true);
      try {
        const response = await getProgramAlumni();
        console.log(response.data);
        const programArray = response?.data?.data || [];
        if (Array.isArray(programArray)) {
          const programData = programArray
            .filter((item) => item.authorName === username)
            .map((item) => ({
                id: item.id,
                image: item.image,
                authorId: item.authorId,
                title: item.title,
                content: item.description,
                createdAt: item.createdAt,
                category: item.category,
                authorName: item.authorName,
            }));
          setProgram(programData);
        } else {
          console.error("Data yang diterima bukan array:", programArray);
        }
      } catch (err) {
        setError("Gagal memuat berita, silakan coba lagi.");
        console.error("Error fetching berita:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProgramAlumni();
  }, [username]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <OffcanvasDashboard />
      <Container>
        <h1 className="text-center">MANAJEMEN PROGRAM ALUMNI</h1>
        <hr className="custom-hr" />
      </Container>
      <DaftarProgramAlumni program={program} />
    </>
  );
}

export default ManajemenProgramAlumni;
