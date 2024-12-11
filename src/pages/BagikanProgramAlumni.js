import { useState, useEffect } from "react";
import { getVerifiedProgramAlumni } from "../api/Api";
import OffcanvasDashboard from "../components/OffcanvasDashboard";
import TabelBagikanProgramAlumni from "../components/TabelBagikanProgramAlumni";
import { Container } from "react-bootstrap";
import { useGlobal } from "../context/GlobalContext";

function BagikanProgramAlumni() {
  const [program, setProgram] = useState([]);
  const [enabledStatus, setEnabledStatus] = useState({});

  const { globalData } = useGlobal(); // Ambil data global
  const username = globalData.username; // Ambil username dari context

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const response = await getVerifiedProgramAlumni(); // Ambil data program dari API
        console.log(response.data); // Cek data yang diterima dari API
  
        const programArray = response.data.data;
  
        if (Array.isArray(programArray)) {
          const programData = programArray.map((item) => ({
            id: item.id,
            image: item.image,
            authorId: item.authorId,
            title: item.title,
            content: item.description,
            createdAt: item.createdAt,
            category: item.category,
            authorName: item.author.username,
            submissionStatus: item.submissionStatus,
            isActive: item.isActive, // Ambil status `isActive` dari API
          }));
  
          // Ambil status dari localStorage jika ada
          const storedStatus = JSON.parse(localStorage.getItem("enabledStatus")) || {};
          
          // Update status acara dengan localStorage jika tersedia, tetapi prioritaskan data API
          const updatedStatus = {};
          programData.forEach((item) => {
            updatedStatus[item.id] = storedStatus[item.id] ?? item.isActive;
          });
  
          setEnabledStatus(updatedStatus);
          setProgram(programData); // Update state dengan data program
        } else {
          console.error("Data yang diterima bukan array:", programArray);
        }
      } catch (error) {
        console.error("Error fetching program: ", error);
      }
    };
  
    fetchProgram();
  }, [username]);
  
  // Simpan status ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem("enabledStatus", JSON.stringify(enabledStatus));
  }, [enabledStatus]);
  

  return (
    <>
      <OffcanvasDashboard />
      <Container>
        <h1 className="text-center">BAGIKAN PROGRAM ALUMNI</h1>
        <hr className="custom-hr" />
      </Container>
      <TabelBagikanProgramAlumni
        program={program}
        enabledStatus={enabledStatus}
        setEnabledStatus={setEnabledStatus}
      />
    </>
  );
}

export default BagikanProgramAlumni;
