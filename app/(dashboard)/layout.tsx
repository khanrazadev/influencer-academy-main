import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-20 md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="h-full hidden md:flex w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 h-full pt-20">{children}</main>
    </div>
  );
};

export default DashboardLayout;
