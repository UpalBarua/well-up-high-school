import CounterSection from '@/components/CounterSection';
import PhotoGellery from '@/components/Gellery/PhotoGellery/PhotoGellery';
import VideoGallery from '@/components/Gellery/VideoGellery/VideoGallery;';
import CreateNoticeForm from '@/components/NoticeForm';
import TeacherForm from '@/components/TeacherForm/TeacherForm';
import VideoUpload from '@/components/VideoUpload';
import ContactUs from '@/components/contactUs';
import Event from '@/components/event';
import ImageUploader from '@/components/imageUploader';
import StudentDetails from '@/components/studentDetails/StudentDetails';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';

const Home = () => {
  const auth = useAuth();
  return (
    <div>
      {/* <h1>Hello well up high school!</h1>
      <Button>Click Me!</Button> */}
      {/* <CreateNoticeForm></CreateNoticeForm>
      <TeacherForm></TeacherForm>
        
      <br />
      <ImageUploader />
      
      <VideoUpload />
      <PhotoGellery></PhotoGellery>
      <VideoGallery></VideoGallery> */}
      <Event></Event>
       <ContactUs></ContactUs>
        <CounterSection></CounterSection>

      
    </div>
  );
};

export default Home;
