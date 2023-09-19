import React from 'react';
import { Button } from '@/components/ui/button';
import CreateNoticeForm from '@/components/NoticeForm';
import ContactUs from '@/components/contactUs';
import TeacherForm from '@/components/TeacherForm/TeacherForm';
import { useAuth } from '@/contexts/auth-context';

const Home = () => {
  const auth = useAuth();
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos,
      recusandae rem consectetur velit vero assumenda. Quia voluptas non
      consectetur ad eius, voluptatum consequuntur iste, repellat pariatur,
      voluptatibus dolorem illo accusamus magni praesentium molestiae tempora?
      Ea magnam minus cum officia, eius magni doloremque! Officia, fugit et.
      Adipisci cupiditate molestias, rerum officia iure, doloremque minus rem
      fugit temporibus minima voluptatibus aut placeat eius sed error nulla sit
      iusto deleniti in similique quae tempore cumque at. Qui odio aspernatur
      nam impedit, dolor modi perferendis autem distinctio corrupti nulla sequi
      omnis maxime eos quasi aliquam optio voluptatem facilis enim libero?
      Aspernatur, necessitatibus exercitationem mollitia beatae libero corporis
      inventore natus explicabo quod distinctio cupiditate commodi nobis
      molestiae, nihil unde. Nostrum sequi temporibus ab vero tempore quas culpa
      dolores ad perferendis minus veniam adipisci atque accusamus quidem, vitae
      alias rerum architecto quasi quod doloremque eos non voluptas eum! Minima
      eum explicabo minus illo earum repellat accusamus eius accusantium sequi,
      nesciunt nemo inventore itaque placeat facere dolore ratione, aut id,
      dolor ipsam aliquid animi hic. Fugiat, sint praesentium dolorum esse
      itaque dolores nihil molestiae dolorem. Velit repellendus sit eius cumque
      repellat suscipit ipsam ad illo consequatur quia corporis maiores odio
      temporibus unde, sint provident non? Minima.
    </div>
  );
};

export default Home;
