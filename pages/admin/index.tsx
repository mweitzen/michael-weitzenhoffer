import { NextPageWithLayout } from "@/types";
//
import AdminLayout from "@/components/layout-admin";

const AdminHomePage: NextPageWithLayout = () => {
  return <div className="text-center">Admin Page</div>;
};

AdminHomePage.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminHomePage;
