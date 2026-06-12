import { Search } from "lucide-react";
import Image from "next/image";
import { upperMenuItem } from "../assets/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* ------upper menu */}
      <div className="bg-black w-full h-20 flex items-center">
        <div className="container flex items-center justify-between">
          {/* ------logo */}
          <div className="logo">
            <Image
              width={160}
              height={52}
              src={"/images/logo.webp"}
              alt="logo"
            />
          </div>

          {/* ------search bar */}
          <div className="w-[592px] h-13 bg-[#424242] rounded-full flex items-center gap-3 px-5">
            <Search className="text-white text-lg" />
            <input
              type="text"
              placeholder="Search.."
              className="w-full h-full border-none outline-none text-white placeholder:text-white placeholder:text-lg"
            />
          </div>

          {/* ------menu items */}
          <div className="menu flex items-center gap-7">
            {upperMenuItem.map((item, key) => (
              <Link
                href={item.itemLink}
                key={key}
                className="text-white hover:text-primaryOrange text-base font-semibold font-inter flex items-center gap-2"
              >
                {item.icon && <item.icon className="text-xs" />}
                {item.itemName}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
