import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from 'date-fns';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsPinAngle } from 'react-icons/bs';

const NOTICE = {
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
};

const { title, description, pdfUrl, createdAt, isPinned } = NOTICE;

const Notice = () => {
  return (
    <section className="container max-w-3xl space-y-2 pb-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        {isPinned && (
          <Button
            size="sm"
            className="bg-orange-100 text-orange-500 border border-gray-200">
            <BsPinAngle />
            <span className="hidden sm:block">Pinned</span>
          </Button>
        )}
      </div>
      <div className="flex items-center gap-2 text-gray-500 font-medium">
        <AiOutlineClockCircle />
        <span>{formatDistanceToNow(new Date(createdAt)) + ' ago'}</span>
      </div>
      <p className="text-gray-600 pb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in
        mollitia est corrupti, iure dolorum nostrum esse vel repellat eveniet
        accusantium ab cumque deleniti quibusdam cupiditate optio dolor
        similique cum perspiciatis qui explicabo autem provident quo beatae!
        Alias aperiam ab facere numquam dignissimos? Aperiam maxime iusto iure
        eius accusamus. Autem.
      </p>
      {pdfUrl ? (
        <iframe className="w-full h-screen bg-transparent" src={pdfUrl} />
      ) : null}
    </section>
  );
};

export default Notice;
