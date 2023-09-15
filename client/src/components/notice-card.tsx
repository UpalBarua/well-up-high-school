import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsPinAngle } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';
import { IoNotificationsOutline } from 'react-icons/io5';

const NoticeCard = () => {
  return (
    <div className="bg-white rounded-xl p-2.5 border sm:p-4 md:p-5 border-gray-300 shadow-sm space-y-2.5 md:flex gap-6">
      <div className="relative h-48 md:h-auto md:order-1 md:w-[50rem] bg-gray-100 rounded-lg border border-gray-200">
        <Image
          className="object-center object-cover"
          src="pdf.svg"
          alt="document"
          fill
        />
      </div>
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600">
            <IoNotificationsOutline className="bg-blue-200 text-blue-500 rounded p-1.5 text-3xl border border-gray-200" />
            <span className="font-medium">General Notice</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Button
              size="sm"
              className="bg-orange-100 text-orange-500 border border-gray-200">
              <BsPinAngle />
              <span className="hidden sm:block">Pinned</span>
            </Button>
            <Button
              size="sm"
              className="bg-green-100 text-green-500 border border-gray-200">
              <FiDownload />
              <span className="hidden sm:block">Download PDF</span>
            </Button>
          </div>
        </div>
        <h3 className="text-xl font-bold capitalize break-all">
          This is a new notice from the principal!
        </h3>
        <p className="text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
          eligendi odio possimus natus tenetur iure et nemo impedit similique
          enim?
        </p>
        <div className="flex items-center gap-1 text-sm text-gray-500 font-medium">
          <AiOutlineClockCircle />
          <span>30 days ago</span>
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
