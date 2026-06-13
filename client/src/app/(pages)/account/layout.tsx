import Navbar from "@/app/components/Navbar";

const accountLayout = ({
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

            </div>
            <div className="main col-span-9">

        {children}
            </div>
        </div>
      </div>
    </>
  );
};

export default accountLayout