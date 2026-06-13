import Link from "next/link";

export interface SidebarItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const SidebarButton = ({ href, icon, name }: SidebarItem) => {
  const handlaeClick = () => {};

  return (
    <>
      <button
        // onClick={handlaeClick}
        className="w-full h-12 flex items-center gap-3 active:bg-[#FEF8EE] text-sm text-[#525252] active:text-primaryOrange font-medium font-inter rounded-xl pl-15"
      >
        {icon} {name}
      </button>
    </>
  );
};

export default SidebarButton;
