import FormAcara from "../components/FormAcara";
import { Stack } from 'react-bootstrap';
import OffcanvasDashboard from "../components/OffcanvasDashboard";
import { useLocation } from 'react-router-dom';

function TambahAcara() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const role = params.get('role'); // Mendapatkan nilai role dari query parameter

    return (
        <>
            <Stack>
                <div className="p-2"><OffcanvasDashboard /></div>
                <div className="p-2">
                    <FormAcara role={role} /> {/* Pass role ke FormTambahBerita */}
                </div>
            </Stack>
        </>
    )
}

export default TambahAcara;