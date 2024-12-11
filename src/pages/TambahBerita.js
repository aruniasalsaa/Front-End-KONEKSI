import { useLocation } from 'react-router-dom';
import FormBerita from "../components/FormBerita";
import { Stack } from 'react-bootstrap';
import OffcanvasDashboard from "../components/OffcanvasDashboard";

function TambahBerita() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const role = params.get('role'); // Mendapatkan nilai role dari query parameter

    return (
        <>
            <Stack>
                <div className="p-2"><OffcanvasDashboard /></div>
                <div className="p-2">
                    <FormBerita role={role} /> {/* Pass role ke FormTambahBerita */}
                </div>
            </Stack>
        </>
    );
}

export default TambahBerita;
