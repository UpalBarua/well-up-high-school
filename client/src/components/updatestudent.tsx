import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const updatestudent = () => {
  return (
    <div className="w-6/12 bg-white shadow-sm border border-gray-50 py-3 px-6 mx-6 rounded-lg">
      <div>
        <Label htmlFor="name" className="text-right mb-1">
          First Name
        </Label>
        <Input placeholder="write your name" className="col-span-3 mt-1" />
      </div>
      <div>
        <Label htmlFor="name" className="text-right mb-1">
          Last Name
        </Label>
        <Input placeholder="Last name" className="col-span-3 mt-1" />
      </div>
      <div>
        <Label htmlFor="name" className="text-right mb-1">
          Adress
        </Label>
        <Input placeholder="write your adress" className="col-span-3 mt-1" />
      </div>
      <div className="">
        <Label htmlFor="name" className="text-right mb-1">
          Phone
        </Label>
        <Input placeholder="phone number" className="col-span-3 mt-1" />
      </div>
      <div>
        <Label htmlFor="name" className="text-right mb-1">
          Session
        </Label>
        <Input placeholder="session" className="col-span-3 mt-1" />
        <Label htmlFor="name" className="text-right mb-1">
          Group
        </Label>
        <Input placeholder="Group" className="col-span-3 mt-1" />
        <Label htmlFor="name" className="text-right mb-1">
          Secton
        </Label>
        <Input placeholder="section" className="col-span-3 mt-1" />
        <Label htmlFor="name" className="text-right mb-1">
          Class
        </Label>
        <Input placeholder="Class" className="col-span-3 mt-1" />
      </div>
      <div>
        <h3 className="font-medium py-1 pr-2">Status:</h3>
        <select className="focus:outline-0 py-1 rounded-lg">
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <Button className="py-0 px-6 my-5">Save Changes</Button>
    </div>
  );
};

export default updatestudent;
