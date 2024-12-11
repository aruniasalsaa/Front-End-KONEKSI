import "../styles/beranda.css";
import NavigationBar from '../components/NavigationBar';
import BerandaNews from '../components/BerandaNews';
import BerandaProgramAlumni from '../components/BerandaProgramAlumni';
import Footer from '../components/Footer';
import { getLatestEvents, getLatestNews, getLatestProgramAlumni} from '../api/Api';
import { useState, useEffect } from 'react';
import BerandaSlide from '../components/BerandaSlide';
import BerandaAcara from "../components/BerandaAcara";

function Beranda() {
    const [beritaBeranda, setBeritaBeranda] = useState([]);
    const [slidesData, setSlidesData] = useState([]);
    const [eventsBeranda, setEventsBeranda] = useState([]);
    const [programAlumniBeranda, setProgramAlumniBeranda] = useState([]);

    useEffect(() => {
        const fetchSlide = async () => {
            try {
                const response = await getLatestEvents();
                console.log(response.data);

                const slidesArray = response.data.data;

                if (Array.isArray(slidesArray)) {
                    const slidesData = slidesArray.map(item => ({
                        id: item.id,
                        src: item.image,
                        label: item.title,
                        caption: item.content
                    }));
                    setSlidesData(slidesData);
                } else {
                    console.error("Data yang diterima bukan array:", slidesArray);
                }
            } catch (error) {
                console.error("Error fetching slide: ", error);
            }
        };
        fetchSlide();

        const fetchBerita = async () => {
            try {
                const response = await getLatestNews();
                console.log(response.data);
                const beritaArray = response.data.data;

                if (Array.isArray(beritaArray)) {
                    const beritaData = beritaArray.map(item => ({
                        id: item.id,
                        image: item.image,
                        authorName: item.authorName,
                        title: item.title,
                        content: item.content
                    }));
                    setBeritaBeranda(beritaData);
                    console.log("Ini data yang saya butuhkan: ", beritaData);
                } else {
                    console.error("Data yang diterima bukan array: ", beritaArray);
                }
            } catch (error) {
                console.error("Error fetching news: ", error);
            }
        };
        fetchBerita();

        const fetchEvents = async () => {
            try {
                const response = await getLatestEvents();
                console.log(response.data);
                const eventsArray = response.data.data;

                if (Array.isArray(eventsArray)) {
                    const eventsData = eventsArray.slice(0, 4).map(item => ({
                        id: item.id,
                        image: item.image,
                        authorName: item.authorName,
                        title: item.title,
                        createdAt: item.createdAt,
                        date:item.date
                    }));
                    setEventsBeranda(eventsData);
                } else {
                    console.error("Data yang diterima bukan array:", eventsArray);
                }
            } catch (error) {
                console.error("Error fetching events: ", error);
            }
        };
        fetchEvents();

        const fetchProgramAlumni = async () => {
            try {
                const response = await getLatestProgramAlumni();
                console.log(response.data);
                const programAlumniArray = response.data.data;

                if (Array.isArray(programAlumniArray)) {
                    const programAlumniData = programAlumniArray.map(item => ({
                        id: item.id,
                        image: item.image,
                        authorName: item.authorName,
                        title: item.title,
                        category: item.category,
                        content: item.description
                    }));
                    setProgramAlumniBeranda(programAlumniData);
                } else {
                    console.error("Data yang diterima bukan array:", programAlumniArray);
                }
            } catch (error) {
                console.error("Error fetching events: ", error);
            }
        };
        fetchProgramAlumni();
    }, []);


    return (
        <div >
            <NavigationBar />
            <BerandaSlide images={slidesData} />
            <BerandaNews berita={beritaBeranda} />
            <BerandaAcara acara={eventsBeranda} />
            <BerandaProgramAlumni programAlumni={programAlumniBeranda} />
            <Footer />
        </div>
    );
}

export default Beranda;