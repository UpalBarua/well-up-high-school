import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsPinAngle } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';

type NoticeCardProps = {
  _id: string;
  title: string;
  description: string;
  isPinned: boolean;
  pdfUrl: string;
  createdAt: string;
};

const NoticeCard = ({
  _id,
  title,
  description,
  pdfUrl,
  isPinned,
  createdAt,
}: NoticeCardProps) => {
  return (
    <Link
      href={`/notice-board/${_id}`}
      className="bg-white rounded-xl p-2.5 border sm:p-4  border-gray-300 shadow-sm space-y-2.5 sm:space-y-0 md:flex gap-6">
      <div className="relative h-48 md:h-auto md:order-1 md:w-[20rem] bg-gray-100 rounded-lg border border-gray-200">
        {pdfUrl ? (
          <iframe
            className="w-full object-cover object-center overflow-hidden h-full rounded-lg border-none"
            src={pdfUrl}
          />
        ) : (
          <Image
            className="object-center object-cover"
            src="pdf.svg"
            alt="document"
            fill
          />
        )}
      </div>
      <div className="space-y-2.5 flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600">
            <IoNotificationsOutline className="bg-blue-200 text-blue-500 rounded p-1.5 text-3xl border border-gray-200" />
            <span className="font-medium">General Notice</span>
          </div>
          <div className="flex items-center gap-1.5">
            {isPinned && (
              <Button
                size="sm"
                className="bg-orange-100 text-orange-500 border border-gray-200">
                <BsPinAngle />
                <span className="hidden sm:block">Pinned</span>
              </Button>
            )}
            <Button
              size="sm"
              className="bg-green-100 text-green-500 border border-gray-200">
              <FiDownload />
              <span className="hidden sm:block">Download PDF</span>
            </Button>
          </div>
        </div>
        <h3 className="text-xl font-bold capitalize break-all">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center gap-1 text-sm text-gray-500 font-medium">
          <AiOutlineClockCircle />
          <span>{formatDistanceToNow(new Date(createdAt)) + ' ago'}</span>
        </div>
      </div>
    </Link>
  );
};

export default NoticeCard;
