import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { FaFly, FaHamburger } from "react-icons/fa";
import { MainNav } from "./main-nav";


const MobileNav = ({className
}: React.HTMLAttributes<HTMLElement>) => {
    return (
      <div className={className}>
        <Sheet>
          <SheetTrigger className="rounded-full shadow-sm p-2">
            <FaHamburger className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle className="text-2xl flex justify-center underline-offset-2">
                AirBee <FaFly className="text-2xl" />
              </SheetTitle>
              <SheetDescription>
                <MainNav className="flex-col text-2xl gap-6 !space-x-0 mt-10" />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    );
}
 
export default MobileNav;