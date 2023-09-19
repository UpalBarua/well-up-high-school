import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';
import { GiTireIronCross } from 'react-icons/gi';
import { GrUserManager } from 'react-icons/gr';
import { BiChevronDown } from 'react-icons/bi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container sticky top-0 bg-accent-50 flex items-center justify-between py-2">
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
              <MenubarItem>Teachers</MenubarItem>
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
    </header>
  );
};

export default Navbar;
