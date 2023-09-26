import Image from "next/image";

const ManagementCard = ({ management }) => {
  const { name, role, position, phone, email, study } = management;
  return (
    <div className="mx-auto w-full bg-white  rounded-lg  flex items-center justify-center border border-gray-200 ">
      <div className="flex-shrink-0 p-4">
        <Image
          className="rounded-full object-cover"
          src="https://firebasestorage.googleapis.com/v0/b/well-up-high-school.appspot.com/o/teachers%2Fdr-terrence-underwood-Io0eEAfSMjY-unsplash.jpg?alt=media&token=849ba77c-a7e6-41f8-a10f-366d27f8823f"
          alt="Profile Image"
          width={80}
          height={60}
        />
      </div>

      <div className="py-4 px-6 flex flex-col justify-between">
        <div>
          <p className="text-xl font-bold text-gray-800 mb-1">{name}</p>
          <p className="text-gray-500 mb-2">{role}</p>
          <div className="flex mb-2">
            <p className="text-gray-600 mr-2 text-sm">Position:</p>
            <p className="text-gray-800 font-semibold text-sm">{position}</p>
          </div>
          <div className="flex mb-2">
            <p className="text-gray-600 mr-2 text-sm">Study:</p>
            <p className="text-gray-800 text-sm">{study}</p>
          </div>
        </div>
        <div className="">
          <div className="mr-2 flex">
            <p className="text-gray-600 mr-2">Phone:</p>
            <p className="text-gray-800">{phone}</p>
          </div>
          <div className="flex">
            <p className="text-gray-600 mr-2">Email:</p>
            <p className="text-gray-800">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementCard;
