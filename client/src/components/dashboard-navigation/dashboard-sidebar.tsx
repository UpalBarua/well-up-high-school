import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type DashboardSidebarProps = {
  navOptions: {
    title: string;
    href: string;
    Icon: ReactNode;
  }[];
  pathname: string;
};

const DashboardSidebar = ({ navOptions, pathname }: DashboardSidebarProps) => {
  return (
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
            {navOptions.map(({ title, href, Icon }) => (
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
  );
};

export default DashboardSidebar;
