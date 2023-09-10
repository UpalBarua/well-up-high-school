import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsPinAngle } from 'react-icons/bs';
import { IoNotificationsOutline } from 'react-icons/io5';
import { Button } from './ui/button';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiDownload } from 'react-icons/bi';

const NoticeCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border flex">
      <div className="space-y-3.5 p-5">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2.5 text-gray-600">
            <IoNotificationsOutline className="bg-blue-400 text-white rounded p-1.5 text-3xl" />{' '}
            <span>Notice by </span>
            <Link
              className="flex items-center gap-1 text-sm border rounded-full shadow-sm p-1 pe-3"
              href="#">
              <div className="relative w-5 h-5 border rounded-full">
                <Image
                  className="rounded-full object-center object-cover"
                  src="/images.jpeg"
                  alt="image"
                  fill
                />
              </div>
              <span>The Principal</span>
            </Link>
          </div>
          <span className="flex items-center gap-2 bg-red-100 text-red-500 text-sm py-1.5 px-3 rounded-md">
            <BsPinAngle /> Pinned
          </span>
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-bold">
            This is a new notice from the principal!
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            perferendis cumque itaque aliquam libero doloremque error reiciendis
            voluptate, sit quod.
          </p>
        </div>
        <div className="flex items-center gap-3 pt-3">
          <Button variant="outline">
            <AiOutlineClockCircle className="text-lg" />
            <span>30 days ago</span>
          </Button>
          <Button size="sm">
            <BiDownload className="text-lg" />
            <span>Download PDF</span>
          </Button>
        </div>
      </div>
      <div className="relative w-[50rem] bg-gray-200 rounded-tr-lg rounded-br-lg">
        <Image
          className="object-center object-cover"
          src="pdf.svg"
          alt="document"
          fill
        />
      </div>
    </div>
  );
};

export default NoticeCard;
