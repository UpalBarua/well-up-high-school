import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const StudentDetails = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const studentId = event.target.studentId.value;
    console.log(name, studentId);
  };
  return (
    <div className="flex justify-center">
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between pb-4 border-bottom">
          <div>
            <h1 className="mb-0 capitalize font-bold dark:text-gray-100 text-[1.6rem] pb-4">
              Well Up High School
            </h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label className="text-[1rem]">Name :</Label>
              <Input
                className="h-14 font-semibold rounded-sm"
                type="name"
                name="name"
                id="name"
                placeholder="name"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label className="text-[1rem]">Student Id :</Label>
              <Input
                className="h-14 font-semibold rounded-sm"
                type="studentId"
                name="studentId"
                id="studentID"
                placeholder="studentId"
              />
            </div>
          </div>

          {/* modal start here   */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-sky-500 px-4 text-white py-2" type="submit">
                submit
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
              <DialogHeader>
                <DialogTitle className="font-bold text-orange-600 text-[1.5rem]">
                  Well-Up High School{" "}
                </DialogTitle>
                <DialogDescription className="text-[1rem] pt-2">
                  Here is Student Information:
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex gap-8">
                  <div>
                    <h1 className="pb-2 font-semibold text-[1.1rem]">
                      Name : Niaz Abir
                    </h1>
                    <h1 className="pb-2 font-semibold text-[1.1rem]">
                      Blood Group : AB+
                    </h1>
                    <h1 className="pb-2 font-semibold text-[1.1rem]">
                      birthday:04/04/2002
                    </h1>
                    <h1 className="pb-2 font-semibold text-[1.1rem]">
                      Class: Ten
                    </h1>
                  </div>
                  <div>
                    <h1 className="pb-2 font-semibold text-[1.1rem]">
                      Address : chittagong
                    </h1>
                    <h1 className="pb-2 font-semibold text-[1.1rem]">
                      Guardian: Father
                    </h1>
                    <h1 className="pb-2 font-semibold text-[1.1rem]">
                      Gender : Male
                    </h1>
                    <h1 className="pb-2 font-semibold text-[1.1rem]">
                      Section : B{" "}
                    </h1>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <button
                  className="bg-sky-500 px-4 text-white py-2"
                  type="submit"
                >
                  Save changes
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </form>

        <p className="leadi dark:text-gray-400 pt-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
          excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Repellat, excepturi.
        </p>
      </div>
    </div>
  );
};

export default StudentDetails;
