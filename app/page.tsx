import ContactSection from "./sections/Contact";
import Footer from "./sections/Footer";
import IntroSection from "./sections/Introduction";
import PersonalProjects from "./sections/PersonalProjects";
import Skills from "./sections/Skills";
import WorkExperience from "./sections/WorkExperience";

export default function Home() {
  return (
    <div className="pt-24 sm:pt-36  px-2 text-sm max-w-[700px] mx-auto">
      <IntroSection />
      <WorkExperience />
      <PersonalProjects />
      <Skills />
      <ContactSection />
      <Footer />
    </div>
  );
}
