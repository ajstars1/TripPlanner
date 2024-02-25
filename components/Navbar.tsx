import { MainNav } from "@/components/navbar/main-nav";
import MobileNav from "@/components/navbar/mobile-nav";
import { Search } from "@/components/navbar/search";
import Link from "next/link";
import { FaFly } from "react-icons/fa";


const Navbar = async () => {
    return (
      <div className="border-b">
      <div className="flex h-16 justify-between items-center px-4 lg:px-8">
          <MobileNav className="lg:hidden flex" />
          <Link href={"/"}>
        <span className="flex cursor-pointer items-center">
          <h1 className="text-4xl mr-2">AirBee</h1>
          <FaFly className="text-4xl" />
        </span>
          </Link>
        <MainNav className="hidden lg:flex flex-grow justify-center" />
        <div className="hidden lg:flex items-center space-x-4">
          <Search />
        </div>
      </div>
    </div>
    
    );
}
 
export default Navbar;