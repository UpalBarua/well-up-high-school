import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ReactNode } from 'react';
import { HiMenu } from 'react-icons/hi';

type DashboardMobileMenuProps = {
  navOptions: {
    title: string;
    href: string;
    Icon: ReactNode;
  }[];
  pathname: string;
};

const DashboardMobileMenu = ({
  navOptions,
  pathname,
}: DashboardMobileMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden">
          <HiMenu className="text-2xl" />
        </button>
      </SheetTrigger>
      <SheetContent side="left">
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
      </SheetContent>
    </Sheet>
  );
};

export default DashboardMobileMenu;
