import { Teacher } from '@/types/types';
import React, { useState, useEffect } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBriefcase,
} from 'react-icons/fa';
import Image from 'next/image';

type TeacherCardProps = {
  teacher: Teacher;
};

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="shadow-md rounded-md p-4 hover:shadow-lg transition duration-100 ease-in-out transform hover:scale-105 border border-gray-300">
      <div className="flex flex-col items-center space-y-4">
        {isLoading ? (
          <div className="animate-pulse">
            <div className="w-32 h-32 rounded-full bg-gray-300 mb-3"></div>
            <div className="w-40 h-4 bg-gray-300 mb-2"></div>
            <div className="w-32 h-4 bg-gray-300 mb-2"></div>
          </div>
        ) : (
          <>
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <Image
                src={teacher.imageURL}
                alt={teacher.name}
                layout="fill"
              />
            </div>
            <h2 className="text-2xl font-semibold text-primary">
              {teacher.name}
            </h2>
            <p className="text-gray-600">{teacher.role}</p>
          </>
        )}
      </div>

      {isLoading ? null : (
        <>
          <div className="mt-4 border-t border-gray-300 pt-4">
            <div className="flex items-center mb-2">
              <FaEnvelope className="text-primary mr-2" />
              <p className="text-gray-600">{teacher.email}</p>
            </div>
            <div className="flex items-center mb-2">
              <FaPhone className="text-primary mr-2" />
              <p className="text-gray-600">{teacher.phone}</p>
            </div>
            <div className="flex items-center mb-2">
              <FaUser className="text-primary mr-2" />
              <p className="text-gray-600">Gender: {teacher.gender}</p>
            </div>
            <div className="flex items-center mb-2">
              <FaChalkboardTeacher className="text-primary mr-2" />
              <p className="text-gray-600">
                Experience: {teacher.experience} years
              </p>
            </div>
            <div className="flex items-center mb-2">
              <FaBriefcase className="text-primary mr-2" />
              <p className="text-gray-600">Role: {teacher.role}</p>
            </div>
          </div>

          <div className="mt-4 flex gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Subjects Taught:
              </h3>
              <ul className="list-disc pl-6">
                {teacher.subjects.map((subject, index) => (
                  <li key={index} className="text-gray-600">
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l pl-4 border-gray-300 flex-1">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Classes Taught:
              </h3>
              <ul className="list-disc pl-6">
                {teacher.classes.map((classTaught, index) => (
                  <li key={index} className="text-gray-600">
                    {classTaught}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-1">
              <FaGraduationCap className="text-primary mr-2" />
              Degrees:
            </h3>
            <ul className="list-disc pl-6">
              {teacher.degrees.map((degree, index) => (
                <li key={index} className="text-gray-600">
                  {degree.degreeName} from {degree.university} ({degree.year})
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default TeacherCard;
