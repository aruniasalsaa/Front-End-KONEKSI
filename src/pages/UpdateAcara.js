import FormUpdateAcara from "../components/FormUpdateAcara";
import OffcanvasDashboard from "../components/OffcanvasDashboard";
import { Stack } from "react-bootstrap";

function UpdateAcara() {
  return (
    <Stack>
      <div className="p-2">
        <OffcanvasDashboard />
      </div>
      <FormUpdateAcara />
    </Stack>
  );
}

export default UpdateAcara;
