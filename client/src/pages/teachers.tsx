import React, { useEffect, useState } from 'react';
import axios from '@/api/axios';
import TeacherCard from '../components/teachersInfo/teacherCard';
import { Teacher } from '@/types/types';

const TeachersList: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    axios
      .get('/teachers')
      .then((response) => {
        setTeachers(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching teachers:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen my-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
        Meet Our Teachers
      </h1>
      {isLoading ? (
        <div className="text-center my-4">Loading....</div>
      ) : teachers.length === 0 ? (
        <div className="text-center my-4">No teachers found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teachers?.map((teacher) => (
            <TeacherCard key={teacher._id} teacher={teacher} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeachersList;
