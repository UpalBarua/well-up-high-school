import axios from '@/api/axios';
import DashboardLayout from '@/layouts/dashboard-layout';
import { useQuery } from '@tanstack/react-query';
import type { ReactElement } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

const TeacherDetails = () => {
  const { data: teacherDetails = {} } = useQuery({
    queryKey: ['teacherDetails'],
    queryFn: async () => {
      const { data } = await axios.get('/teachers/650d02b67d7f001271c12e9f');
      return data.data;
    },
  });

  const {
    name,
    imageURL,
    role,
    phone,
    email,
    classes,
    experience,
    subjects,
    degrees,
  } = teacherDetails;
  console.log(teacherDetails);

  return (
    <div className="">
      <div className="flex gap-7">
        <div className="relative h-28 aspect-square">
          <Image
            className="object-center object-cover rounded-full border border-primary-50/50 shadow-sm"
            src={imageURL}
            alt={name}
            fill
          />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold capitalize">{name}</h2>
            <p className="text-sm">{role}</p>
          </div>
          <div className="flex items-center gap-2">
            <p>{phone}</p>
            <p>{email}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm">Edit</Button>
            <Button size="sm">Remove</Button>
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex gap-8">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Education</h3>
          {degrees?.map(({ degreeName, university, year }) => (
            <div className="">
              <p className="font-bold">{degreeName}</p>
              <p>{university}</p>
              <p>{year}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <div>
            <h3 className="font-semibold">classes</h3>
            <p>{classes?.join(', ')}</p>
          </div>
          <div>
            <h3 className="font-semibold">Subjects</h3>
            <p>{subjects?.join(', ')}</p>
          </div>
          <div>
            <h3 className="font-semibold">Experience</h3>
            <p>{`${experience} Years`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

TeacherDetails.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default TeacherDetails;
