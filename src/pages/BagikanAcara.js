import { useState, useEffect } from "react";
import { getVerifiedEvents } from "../api/Api";
import OffcanvasDashboard from "../components/OffcanvasDashboard";
import { useGlobal } from "../context/GlobalContext";
import TabelBagikanAcara from "../components/TabelBagikanAcara";
import { Container } from "react-bootstrap";

function BagikanAcara() {
  const { globalData } = useGlobal();
  const username = globalData.username;

  const [acara, setAcara] = useState([]);
  const [enabledStatus, setEnabledStatus] = useState({});

  useEffect(() => {
    const fetchAcara = async () => {
      try {
        const response = await getVerifiedEvents();
        console.log(response.data);
        const acaraArray = response.data.data;

        if (Array.isArray(acaraArray)) {
          const acaraData = acaraArray.map((item) => ({
            id: item.id,
            title: item.title,
            image: item.image,
            content: item.description,
            date: item.date,
            isActive: item.isActive,
            authorName: item.author.username,
          }));

          // Ambil status dari localStorage jika ada
          const storedStatus = JSON.parse(localStorage.getItem("enabledStatus")) || {};

          // Update status acara dengan localStorage jika tersedia
          const updatedStatus = {};
          acaraData.forEach((item) => {
            updatedStatus[item.id] = storedStatus[item.id] ?? item.isActive;
          });

          setEnabledStatus(updatedStatus);
          setAcara(acaraData);
        }
      } catch (error) {
        console.error("Error fetching acara: ", error);
      }
    };

    fetchAcara();
  }, [username]);

  // Simpan status ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem("enabledStatus", JSON.stringify(enabledStatus));
  }, [enabledStatus]);

  return (
    <>
      <OffcanvasDashboard />
      <Container>
        <h1 className="text-center">BAGIKAN ACARA</h1>
        <hr className="custom-hr" />
      </Container>
      <TabelBagikanAcara acara={acara} enabledStatus={enabledStatus} setEnabledStatus={setEnabledStatus} />
    </>
  );
}

export default BagikanAcara;
