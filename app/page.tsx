import ContactSection from "./sections/ContactSection";
import IntroSection from "./sections/IntroSection";
import PersonalProjects from "./sections/PersonalProjects";
import WorkExperience from "./sections/WorkExperience";

export default function Home() {
  return (
    <div className="pt-32 px-2 text-sm pb-10 max-w-[600px] mx-auto">
      <IntroSection />
      <WorkExperience />
      <PersonalProjects />
      <ContactSection />
    </div>
  );
}
