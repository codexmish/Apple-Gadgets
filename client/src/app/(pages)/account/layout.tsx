import AccoutSidebar from "@/app/components/account/AccoutSidebar";
import Navbar from "@/app/components/Navbar";
import "../../globals.css";

const AccountLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="sidebar col-span-3">
            <AccoutSidebar />
          </div>
          <div className="main col-span-9">{children}</div>
        </div>
      </div>
    </>
  );
};

export default AccountLayout;
