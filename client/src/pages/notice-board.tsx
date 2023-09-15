import NoticeCard from '@/components/notice-card';
import { Input } from '@/components/ui/input';
import { BiSearchAlt2 } from 'react-icons/bi';

const NoticeBoard = () => {
  return (
    <main className="container py-2">
      <section className="space-y-2.5">
        <h2 className="text-2xl font-bold">Notice Board</h2>
        <form className="flex items-center bg-white border-lg px-3 py-0.5 rounded-lg border shadow-sm">
          <BiSearchAlt2 className="text-2xl" />
          <Input
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            type="text"
            placeholder="Search Notice"
          />
        </form>
        <div className="space-y-2.5">
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
        </div>
      </section>
      {/* <section></section> */}
    </main>
  );
};

export default NoticeBoard;
