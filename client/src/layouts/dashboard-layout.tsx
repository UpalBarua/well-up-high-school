import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { AiOutlineNotification } from 'react-icons/ai';
import { BiBarChartSquare } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdOutlineManageAccounts, MdOutlinePermMedia } from 'react-icons/md';
import { PiChalkboardTeacher, PiStudent } from 'react-icons/pi';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';

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
    <div className="container flex gap-5 relative">
      <aside className="w-60 hidden md:block border-r-2">
        <div className="fixed h-full w-60 p-4 space-y-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="relative h-6 w-6">
              <Image src="/logo.png" alt="logo" fill />
            </div>
            <h1 className="font-bold">Well Up High School</h1>
          </Link>
          <nav>
            <h2 className="text-primary-900 text-sm pb-2">Main Menu</h2>
            <ul className="space-y-1.5 font-medium">
              {NAV_OPTIONS.map(({ title, href, Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'flex select-none items-center rounded-md px-2 py-1.5 outline-none focus:bg-accent gap-1.5 focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground hover:bg-accent-100 hover:text-accent-600 border border-transparent hover:border-primary-50/50',
                      pathname === href &&
                        'bg-accent-100 text-accent-600 border-primary-50/50'
                    )}>
                    {Icon}
                    <span>{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default DashboardLayout;
