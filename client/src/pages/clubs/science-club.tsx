import React from 'react';
import { useRouter } from 'next/router';
import {
  FaUsers,
  FaUser,
  FaCalendarAlt,
  FaInfoCircle,
} from 'react-icons/fa';

const scienceClub = () => {
  const router = useRouter();

  // Replace with your actual club data
  const clubData = {
    name: "Science Club",
    member: 210,
    precedent: "Sabbir Ahmed",
    vice_precedent: "Atif Adhor",
    start_it: "29/05/2022",
    details: "Art club is a great work for our campus ... (your club details)",
    image1: "https://img.freepik.com/free-photo/female-scientist-teaching-young-girls-about-science_23-2148571265.jpg?size=626&ext=jpg&uid=R79200208&ga=GA1.2.2093189715.1681108557&semt=ais",
    image2: "https://img.freepik.com/free-photo/girl-looking-through-microscope-teacher-with-boys_259150-60329.jpg?size=626&ext=jpg&uid=R79200208&ga=GA1.2.2093189715.1681108557&semt=ais",
    image3: "https://img.freepik.com/free-photo/medium-shot-woman-girl-studying_23-2148581921.jpg?size=626&ext=jpg&uid=R79200208&ga=GA1.2.2093189715.1681108557&semt=ais"
  };

  return (
    <div className="min-h-screen">
      <div className="bg-primary py-8 md:py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">{clubData.name}</h1>
        </div>
      </div>
      <div className="container mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-96">
            <img
              src={clubData.image1}
              alt={`${clubData.name} Image 1`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative h-64 md:h-96">
              <img
                src={clubData.image2}
                alt={`${clubData.name} Image 2`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64 md:h-96">
              <img
                src={clubData.image3}
                alt={`${clubData.name} Image 3`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex items-center mb-4">
            <FaInfoCircle className="text-3xl md:text-4xl lg:text-5xl mr-2 text-primary" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">About the Club</h2>
          </div>
          <p className="text-base md:text-lg lg:text-xl text-gray-700">{clubData.details}</p>
        </div>
        <div className="mt-8">
          <div className="flex items-center mb-4">
            <FaUsers className="text-3xl md:text-4xl lg:text-5xl mr-2 text-primary" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Club Members</h2>
          </div>
          <p className="text-base md:text-lg lg:text-xl flex items-center">
            <FaUser className="text-lg md:text-xl lg:text-2xl text-gray-700 mr-2" />
            Precedent: {clubData.precedent}
          </p>
          <p className="text-base md:text-lg lg:text-xl flex items-center">
            <FaUser className="text-lg md:text-xl lg:text-2xl text-gray-700 mr-2" />
            Vice Precedent: {clubData.vice_precedent}
          </p>
          <p className="text-base md:text-lg lg:text-xl flex items-center">
            <FaCalendarAlt className="text-lg md:text-xl lg:text-2xl text-gray-700 mr-2" />
            Start Date: {clubData.start_it}
          </p>
          <p className="text-base md:text-lg lg:text-xl flex items-center">
            <FaUsers className="text-lg md:text-xl lg:text-2xl text-gray-700 mr-2" />
            Total Members: {clubData.member}
          </p>
        </div>
      </div>
    </div>
  );
};

export default scienceClub;