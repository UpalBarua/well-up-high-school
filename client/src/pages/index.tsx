import CreateNoticeForm from "@/components/NoticeForm";
import TeacherForm from "@/components/TeacherForm/TeacherForm";
import VideoUpload from "@/components/VideoUpload";
import ContactUs from "@/components/contactUs";
import ImageUploader from "@/components/imageUploader";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";

const Home = () => {
  const auth = useAuth();

  return (
    <div>
      <h1>Hello well up high school!</h1>
      <Button>Click Me!</Button>
      <CreateNoticeForm></CreateNoticeForm>
      <TeacherForm></TeacherForm>
      <ContactUs></ContactUs>
      <br />
      <ImageUploader />
      <VideoUpload/>
    </div>
  );
};

export default Home;
