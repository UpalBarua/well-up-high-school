import CustomButton from "@/components/CustomButton";
import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
const TeacherTableData = ({ teacher }: any) => {
  console.log(teacher);
  const { imageURL, name, role, phone, degrees, email } = teacher;
  return (
    <TableRow>
      <TableCell className="font-medium">
        <Image
          src={teacher?.imageURL}
          width={40}
          height={40}
          className="rounded-xl"
          alt={teacher?.imageURL}
        />
      </TableCell>
      <TableCell className="font-bold">{name}</TableCell>
      <TableCell className="font-medium">{role}</TableCell>
      <TableCell>
        {degrees?.map((degree: any, i: any) => (
          <div key={i} degree={degree}>
            <li className="list-none text-sm">{degree?.degreeName}</li>
            <p className="text-sm">University : {degree.university}</p>
          </div>
        ))}
      </TableCell>
      <TableCell className="">
        <li className="list-none">{phone}</li>
        <li className="list-none">{email}</li>
      </TableCell>
      <TableCell className="">
        <Link href={`/dashboard/teachers/${teacher._id}`}>
          {" "}
          <CustomButton className="px-4 py-1 font-medium rounded-full bg-transparent shadow-sm hover:bg-opacity-0 border border-gray-400 text-blue-700">
            Details
          </CustomButton>
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default TeacherTableData;
