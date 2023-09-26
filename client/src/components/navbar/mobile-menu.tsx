import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden">
          <HiMenu className="text-2xl" />
        </button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav>
          <Menubar className="border-0 grid gap-2.5 pt-8">
            <MenubarMenu>
              <MenubarTrigger>
                <span>Gallery</span>
                <BiChevronDown className="text-2xl" />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Photo</MenubarItem>
                <MenubarItem>Video</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>
                <span>Administration</span>
                <BiChevronDown className="text-2xl" />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href="/teachers">Teachers</Link>
                </MenubarItem>
                <MenubarItem>Management</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>
                <span>Notices</span>
                <BiChevronDown className="text-2xl" />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Student Notice</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>
                <span>Academic</span>
                <BiChevronDown className="text-2xl" />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Student Notice</MenubarItem>
                <MenubarItem>Routine</MenubarItem>
                <MenubarItem>Suggestion</MenubarItem>
                <MenubarItem>Student Result</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>
                <span>Clubs</span>
                <BiChevronDown className="text-2xl" />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href="/clubs/science-club">Science Club</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/clubs/sport-club">Sports Club</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/clubs/cultural-club">Cultural Club</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/clubs/art-club">Art Club </Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
