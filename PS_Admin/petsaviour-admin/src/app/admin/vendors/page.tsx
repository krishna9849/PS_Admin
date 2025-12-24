import RequireRole from "../../../components/auth/RequireRole";
import VendorsPage from "../vendors/VendorsPage";

export default function Page() {
  return (
    <RequireRole allowed={["admin"]}>
      <VendorsPage />
    </RequireRole>
  );
}
