import Navbar from '../components/Navbar';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Milestones from '@/components/milestones';
import Domain from '@/components/domain';
import Documents from '@/components/document';
import Tools from '@/components/Tools&Tec';
import Introduction from '@/components/introduction';
import Publication from '@/components/publication';
import Team from '@/components/Team';
import Contact from '@/components/Contact';


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Domain />
      <Milestones />
      <Documents />
      <Publication />
      <Team />
      <Tools />
      <Contact />
      <Footer />
    </>
  );
}