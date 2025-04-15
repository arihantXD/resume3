import ProjectModal from "../components/modals/ProjectModal";

const PersonalProjects = () => {
  return (
    <div className="pt-12">
      <div className="text-light-gray text-base font-medium">
        Personal Projects
      </div>
      <div className="text-black font-medium pt-2">
        <div className="pt-1 text-lg leading-5">Full Stack Developer</div>
        <div className="pt-1">09/2023 - 05/2025</div>
      </div>
      <div>
        I have worked on multiple projects and hosted them online, some projects
        eventually transitioned into freelancing opportunities, I am passionate
        client-focused results and delivering impactful solutions.{" "}
        <ProjectModal />
      </div>
    </div>
  );
};

export default PersonalProjects;
