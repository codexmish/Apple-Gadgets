import { accountSidebar } from "@/app/assets/constants";
import SidebarButton from "../ui/SidebarButton";
import { LogOut } from "lucide-react";

const AccoutSidebar = () => {
  return (
    <>
      <div className="border rounded-xl p-4 flex flex-col items-center gap-2">
        {accountSidebar.map((item, key) => (
          <SidebarButton
            key={key}
            href={item.href}
            icon={item.icon}
            name={item.name}
          />
        ))}
        <SidebarButton href="/" icon={<LogOut />} name="logout" />
      </div>
    </>
  );
};

export default AccoutSidebar;
