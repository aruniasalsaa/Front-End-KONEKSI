import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';  // Jika menggunakan axios untuk request API

// Membuat Context
const GlobalContext = createContext();

// Provider untuk menyediakan data global
export const GlobalProvider = ({ children }) => {
    const [globalData, setGlobalData] = useState({
        role: "",
        username: "",
        id: "", // Menambahkan id ke state globalData
    });

    // Memuat data dari localStorage jika ada
    useEffect(() => {
        const storedRole = localStorage.getItem('role'); // Ambil dari localStorage
        const storedUsername = localStorage.getItem('username'); // Ambil dari localStorage
        const storedId = localStorage.getItem('id'); // Ambil id dari localStorage

        if (storedRole) {
            setGlobalData((prevData) => ({
                ...prevData,
                role: storedRole, // Set role dari localStorage
                username: storedUsername || "",
                id: storedId || "", // Set id dari localStorage
            }));
        }
    }, []); // Menjalankan hanya sekali ketika komponen pertama kali dimuat

    const updateGlobalData = (key, value) => {
        setGlobalData((prevData) => ({
            ...prevData,
            [key]: value, // Update data berdasarkan key
        }));

        // Simpan data penting ke localStorage
        localStorage.setItem(key, value);
    };

    const clearGlobalData = () => {
        setGlobalData({
            role: "",
            username: "",
            id: "", // Reset id
        });

        // Hapus data dari localStorage
        localStorage.removeItem('role');
        localStorage.removeItem('username');
        localStorage.removeItem('id'); // Hapus id dari localStorage
    };

    return (
        <GlobalContext.Provider value={{ globalData, updateGlobalData, clearGlobalData }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Hook untuk menggunakan data Global
export const useGlobal = () => useContext(GlobalContext);

// Fungsi untuk login dan menyimpan data ke GlobalContext
export const loginUser = async (credentials, updateGlobalData) => {
    try {
        const response = await axios.post('/api/login', credentials); // Ganti dengan URL API login Anda
        const { data } = response; // Asumsikan data respons sesuai dengan format yang diberikan

        // Simpan data ke GlobalContext
        updateGlobalData('role', data.user.role.name);
        updateGlobalData('username', data.user.username);
        updateGlobalData('id', data.user.id);

        // Jika diperlukan, simpan token atau data lain ke localStorage juga
        localStorage.setItem('token', data.token);  // Asumsi token juga dikirim dalam respons
    } catch (error) {
        console.error("Login failed:", error);
    }
};
