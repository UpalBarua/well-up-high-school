import NoticeCard from '@/components/notice-card';
import { Input } from '@/components/ui/input';
import { BiSearchAlt2 } from 'react-icons/bi';
import { PiExam } from 'react-icons/pi';

const NoticeBoard = () => {
  return (
    <section className="grid grid-cols-12 gap-10 py-10">
      <div className="col-span-9">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Notice Board</h2>
          <form className="flex items-center bg-white border-lg px-2.5 py-0.5 rounded-lg border shadow-sm">
            <BiSearchAlt2 className="text-2xl" />
            <Input
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              type="text"
              placeholder="search notice"
            />
          </form>
        </div>
        <div className="space-y-3.5 py-5">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <NoticeCard key={i} />
            ))}
          <NoticeCard />
        </div>
      </div>
      <aside className="col-span-3">
        <h3 className="text-2xl font-bold pb-3">Categories</h3>
        <ul className="space-y-1 pb-4">
          {['All Notice', 'Exam Notice', 'Holiday Notice', 'Event Notice'].map(
            (notice) => (
              <li
                className="flex items-center px-3 py-2 gap-2 rounded-lg font-medium hover:text-blue-600 hover:bg-blue-100"
                key={notice}>
                <PiExam className="text-2xl" />
                <span>{notice}</span>
              </li>
            )
          )}
        </ul>
        <h3 className="text-2xl font-bold pb-3">Old Notices</h3>
        <ul className="space-y-1">
          {['Last Week', 'Last Month', 'Last Year'].map((notice) => (
            <li
              className="flex items-center px-3 py-2 gap-2 rounded-lg font-medium hover:text-blue-600 hover:bg-blue-100"
              key={notice}>
              <PiExam className="text-2xl" />
              <span>{notice}</span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default NoticeBoard;
