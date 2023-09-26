import ManagementCard from "@/components/managementCard";

const management = () => {
  const managements = [
    {
      name: "John Doe",
      role: "Manager",
      position: "Senior Manager",
      study: "MBA, Harvard University",
      phone: "123-456-7890",
      email: "johndoe@example.com",
    },
    {
      name: "Jane Smith",
      role: "Director",
      position: "Director of Operations",
      study: "B.S. Business Administration",
      phone: "555-555-5555",
      email: "janesmith@example.com",
    },
    {
      name: "Michael Johnson",
      role: "Supervisor",
      position: "Production Supervisor",
      study: "Diploma in Engineering",
      phone: "987-654-3210",
      email: "michaelj@example.com",
    },
    {
      name: "Sarah Brown",
      role: "Analyst",
      position: "Financial Analyst",
      study: "M.S. Finance",
      phone: "111-222-3333",
      email: "sarahbrown@example.com",
    },
    {
      name: "Robert Davis",
      role: "Engineer",
      position: "Software Engineer",
      study: "B.S. Computer Science",
      phone: "444-555-6666",
      email: "robertd@example.com",
    },
    {
      name: "Amanda Wilson",
      role: "Coordinator",
      position: "Marketing Coordinator",
      study: "B.A. Marketing",
      phone: "777-888-9999",
      email: "amandaw@example.com",
    },
    {
      name: "James Smith",
      role: "Manager",
      position: "HR Manager",
      study: "MBA, Stanford University",
      phone: "666-777-8888",
      email: "jamess@example.com",
    },
    {
      name: "Jennifer Lee",
      role: "Designer",
      position: "Graphic Designer",
      study: "B.F.A. Graphic Design",
      phone: "222-333-4444",
      email: "jenniferl@example.com",
    },
    {
      name: "David Jones",
      role: "Consultant",
      position: "Management Consultant",
      study: "Ph.D. Business Administration",
      phone: "999-888-7777",
      email: "davidj@example.com",
    },
    {
      name: "Karen Davis",
      role: "Coordinator",
      position: "Project Coordinator",
      study: "B.S. Project Management",
      phone: "333-444-5555",
      email: "karend@example.com",
    },
  ];

  return (
    <div>
      <h3 className="font-extrabold pt-16 pb-12 text-3xl text-center">
        Meet Our Administrator
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-3 gap-y-8">
        {managements?.map((management, index) => (
          <ManagementCard key={index} management={management} />
        ))}
      </div>
    </div>
  );
};

export default management;
