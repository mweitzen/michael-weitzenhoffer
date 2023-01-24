import { WithChildren } from "@/types";
import AdminTopbar from "./topbar-admin";
//
const AdminLayout: React.FC<WithChildren> = ({ children }) => {
  return (
    <div className="relative flex h-full flex-col bg-white">
      <AdminTopbar />
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
