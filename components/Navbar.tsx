import { MainNav } from "@/components/navbar/main-nav";
import MobileNav from "@/components/navbar/mobile-nav";
import { Search } from "@/components/navbar/search";
import { FaFly } from "react-icons/fa";


const Navbar = async () => {
    return (
      <div>
        <div className="border-b">
          <div className="flex h-16 justify-between items-center px-4">
            <MobileNav className="lg:hidden flex" />
            <span className="flex">
            <h1 className="text-4xl">AirBee</h1>
            <FaFly className="text-4xl" />
            </span>
            <MainNav className="mx-6 hidden lg:flex" />
            <div className="flex items-center space-x-4">
              <Search className="hidden lg:flex" />
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Navbar;