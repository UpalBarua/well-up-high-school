import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { AiOutlineNotification } from 'react-icons/ai';
import { BiBarChartSquare } from 'react-icons/bi';
import { HiMenu, HiOutlineUserGroup } from 'react-icons/hi';
import { MdOutlineManageAccounts, MdOutlinePermMedia } from 'react-icons/md';
import { PiChalkboardTeacher, PiStudent } from 'react-icons/pi';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import DashboardMobileMenu from '@/components/dashboard-navigation/dashboard-mobile-menu';
import DashboardSidebar from '@/components/dashboard-navigation/dashboard-sidebar';

const NAV_OPTIONS = [
  {
    title: 'Overview',
    href: '/dashboard',
    Icon: <BiBarChartSquare className="text-lg" />,
  },
  {
    title: 'Notices',
    href: '/dashboard/notices',
    Icon: <AiOutlineNotification className="text-lg" />,
  },
  {
    title: 'Clubs',
    href: '/dashboard/clubs',
    Icon: <HiOutlineUserGroup className="text-lg" />,
  },
  {
    title: 'Gallery',
    href: '/dashboard/gallery',
    Icon: <MdOutlinePermMedia className="text-lg" />,
  },
  {
    title: 'Teachers',
    href: '/dashboard/teachers',
    Icon: <PiChalkboardTeacher className="text-lg" />,
  },
  {
    title: 'Students',
    href: '/dashboard/students',
    Icon: <PiStudent className="text-lg" />,
  },
  {
    title: 'Management',
    href: '/dashboard/management',
    Icon: <MdOutlineManageAccounts className="text-lg" />,
  },
];

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useRouter();

  return (
    <div className="container md:flex gap-3.5 relative">
      <header className="md:hidden flex items-center gap-3 py-2 bg-accent-50/80 backdrop-blur-sm sticky top-0">
        <DashboardMobileMenu navOptions={NAV_OPTIONS} pathname={pathname} />
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-6 w-6">
            <Image src="/logo.png" alt="logo" fill />
          </div>
          <h1 className="text-sm font-bold">Well Up High School</h1>
        </Link>
      </header>
      <DashboardSidebar navOptions={NAV_OPTIONS} pathname={pathname} />
      <main className="flex-1 py-2.5">{children}</main>
    </div>
  );
};

export default DashboardLayout;
