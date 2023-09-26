import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import Image from 'next/image';
import Link from 'next/link';
import { BiChevronDown } from 'react-icons/bi';
import MobileMenu from './mobile-menu';

const Navbar = () => {
  return (
    <header className="container sticky top-0 bg-accent-50/80 backdrop-blur-sm flex items-center justify-between py-2 z-10">
      <Link href="/" className="flex items-center gap-3">
        <div className="relative h-8 w-8">
          <Image src="/logo.png" alt="logo" fill />
        </div>
        <h1 className="hidden sm:block text-lg font-bold">
          Well Up High School
        </h1>
      </Link>
      <nav className="hidden md:block">
        <Menubar className="border-0">
          <MenubarMenu>
            <MenubarTrigger>
              <span>Gallery</span>
              <BiChevronDown className="text-2xl" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem><Link href="photos">Photos</Link></MenubarItem>
              <MenubarItem><Link href="videos">Videos</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>
              <span>Administration</span>
              <BiChevronDown className="text-2xl" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link href="teachers">Teachers</Link>
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
              <MenubarItem>Science Club</MenubarItem>
              <MenubarItem>Sports Club</MenubarItem>
              <MenubarItem>Cultural Club</MenubarItem>
              <MenubarItem>Art Club</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </nav>
      <MobileMenu />
    </header>
  );
};

export default Navbar;
