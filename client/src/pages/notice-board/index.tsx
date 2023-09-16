import NoticeCard from '@/components/notice-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { GiPartyPopper } from 'react-icons/gi';
import { GrAnnounce } from 'react-icons/gr';
import { PiBooks } from 'react-icons/pi';
import { TbBeach } from 'react-icons/tb';

const CATEGORIES = [
  {
    Icon: <GrAnnounce className="text-2xl" />,
    title: 'All Notices',
  },
  {
    Icon: <PiBooks className="text-2xl" />,
    title: 'Exam Notices',
  },
  {
    Icon: <TbBeach className="text-2xl" />,
    title: 'Holiday Notices',
  },
  {
    Icon: <GiPartyPopper className="text-2xl" />,
    title: 'Event Notices',
  },
  {
    Icon: <FaChalkboardTeacher className="text-2xl" />,
    title: 'Teachers Notice',
  },
];

const NOTICES = [
  {
    _id: '64fecc5dc7c94f09e73a1b83',
    title: 'Sample Notice Title',
    description: 'This is a sample notice description with lots of text.',
    pdfUrl:
      'https://firebasestorage.googleapis.com/v0/b/well-up-high-school.appspot.com/o/Resume%20Of%20Nayan.pdf?alt=media&token=16c4a8ec-5c7a-4ab6-b742-44c69ab029a8#toolbar=0&navpanes=0',
    postedDate: '2023-09-07T00:00:00.000Z',
    expiryDate: '2023-09-28T00:00:00.000Z',
    author: 'Amran',
    isPinned: true,
    relatedLinks: [
      {
        title: 'Related Link 1',
        url: 'https://example.com/link1',
        _id: '64fecc5dc7c94f09e73a1b84',
      },
    ],
    createdAt: '2023-09-11T08:14:21.340Z',
    updatedAt: '2023-09-11T08:14:21.340Z',
    __v: 0,
  },
  {
    _id: '64fecc5dc7c94f09e73a1b83',
    title: 'Sample Notice Title',
    description: 'This is a sample notice description with lots of text.',
    pdfUrl:
      'https://firebasestorage.googleapis.com/v0/b/well-up-high-school.appspot.com/o/Resume%20Of%20Nayan.pdf?alt=media&token=16c4a8ec-5c7a-4ab6-b742-44c69ab029a8#toolbar=0&navpanes=0',
    postedDate: '2023-09-07T00:00:00.000Z',
    expiryDate: '2023-09-28T00:00:00.000Z',
    author: 'Amran',
    isPinned: true,
    relatedLinks: [
      {
        title: 'Related Link 1',
        url: 'https://example.com/link1',
        _id: '64fecc5dc7c94f09e73a1b84',
      },
    ],
    createdAt: '2023-09-11T08:14:21.340Z',
    updatedAt: '2023-09-11T08:14:21.340Z',
    __v: 0,
  },
  {
    _id: '64fecc5dc7c94f09e73a1b83',
    title: 'Sample Notice Title',
    description: 'This is a sample notice description with lots of text.',
    pdfUrl:
      'https://firebasestorage.googleapis.com/v0/b/well-up-high-school.appspot.com/o/Resume%20Of%20Nayan.pdf?alt=media&token=16c4a8ec-5c7a-4ab6-b742-44c69ab029a8#toolbar=0&navpanes=0',
    postedDate: '2023-09-07T00:00:00.000Z',
    expiryDate: '2023-09-28T00:00:00.000Z',
    author: 'Amran',
    isPinned: false,
    relatedLinks: [
      {
        title: 'Related Link 1',
        url: 'https://example.com/link1',
        _id: '64fecc5dc7c94f09e73a1b84',
      },
    ],
    createdAt: '2023-09-11T08:14:21.340Z',
    updatedAt: '2023-09-11T08:14:21.340Z',
    __v: 0,
  },
  {
    _id: '64fecc5dc7c94f09e73a1b83',
    title: 'Sample Notice Title',
    description: 'This is a sample notice description with lots of text.',
    pdfUrl:
      'https://firebasestorage.googleapis.com/v0/b/well-up-high-school.appspot.com/o/Resume%20Of%20Nayan.pdf?alt=media&token=16c4a8ec-5c7a-4ab6-b742-44c69ab029a8#toolbar=0&navpanes=0',
    postedDate: '2023-09-07T00:00:00.000Z',
    expiryDate: '2023-09-28T00:00:00.000Z',
    author: 'Amran',
    isPinned: false,
    relatedLinks: [
      {
        title: 'Related Link 1',
        url: 'https://example.com/link1',
        _id: '64fecc5dc7c94f09e73a1b84',
      },
    ],
    createdAt: '2023-09-11T08:14:21.340Z',
    updatedAt: '2023-09-11T08:14:21.340Z',
    __v: 0,
  },
  {
    _id: '64fecc5dc7c94f09e73a1b83',
    title: 'Sample Notice Title',
    description: 'This is a sample notice description with lots of text.',
    pdfUrl:
      'https://firebasestorage.googleapis.com/v0/b/well-up-high-school.appspot.com/o/Resume%20Of%20Nayan.pdf?alt=media&token=16c4a8ec-5c7a-4ab6-b742-44c69ab029a8#toolbar=0&navpanes=0',
    postedDate: '2023-09-07T00:00:00.000Z',
    expiryDate: '2023-09-28T00:00:00.000Z',
    author: 'Amran',
    isPinned: true,
    relatedLinks: [
      {
        title: 'Related Link 1',
        url: 'https://example.com/link1',
        _id: '64fecc5dc7c94f09e73a1b84',
      },
    ],
    createdAt: '2023-09-11T08:14:21.340Z',
    updatedAt: '2023-09-11T08:14:21.340Z',
    __v: 0,
  },
  {
    _id: '64fecc5dc7c94f09e73a1b83',
    title: 'Sample Notice Title',
    description: 'This is a sample notice description with lots of text.',
    pdfUrl:
      'https://firebasestorage.googleapis.com/v0/b/well-up-high-school.appspot.com/o/Resume%20Of%20Nayan.pdf?alt=media&token=16c4a8ec-5c7a-4ab6-b742-44c69ab029a8#toolbar=0&navpanes=0',
    postedDate: '2023-09-07T00:00:00.000Z',
    expiryDate: '2023-09-28T00:00:00.000Z',
    author: 'Amran',
    isPinned: true,
    relatedLinks: [
      {
        title: 'Related Link 1',
        url: 'https://example.com/link1',
        _id: '64fecc5dc7c94f09e73a1b84',
      },
    ],
    createdAt: '2023-09-11T08:14:21.340Z',
    updatedAt: '2023-09-11T08:14:21.340Z',
    __v: 0,
  },
];

const NoticeBoard = () => {
  return (
    <main className="container max-w-7xl mx-auto grid grid-cols-12 gap-5">
      <section className="space-y-2.5 col-span-12 lg:col-span-9">
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
          {NOTICES.map((notice) => (
            <NoticeCard key={notice._id} {...notice} />
          ))}
        </div>
      </section>
      <aside className="hidden lg:block col-span-3">
        <div className="sticky top-0">
          <h3 className="text-2xl font-bold pb-3">Categories</h3>
          <ul className="flex flex-col gap-2.5">
            {CATEGORIES.map(({ title, Icon }) => (
              <Button
                variant="ghost"
                className=" hover:text-blue-600 hover:bg-blue-100 justify-start text-base text-gray-700"
                key={title}>
                {Icon}
                <span className="capitalize">{title}</span>
              </Button>
            ))}
          </ul>
        </div>
      </aside>
    </main>
  );
};

export default NoticeBoard;
