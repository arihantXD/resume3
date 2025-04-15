import ExperienceModal from "../components/modals/ExperienceModal";

const WorkExperience = () => {
  return (
    <div className="pt-12">
      <div className="text-light-gray text-base font-medium">
        Work Experience
      </div>
      <div className="pt-2">
        <div className="text-black font-medium text-lg leading-5">
          Peristent System Limited, Nagpur
        </div>
        <div className="text-black font-medium">
          <div className="pt-1">Software Engineer</div>
          <div className="pt-1">09/2023 - 05/2025</div>
        </div>
        <p className="pt-1">
          I joined Persistent System Ltd. just after my college, during college
          I got offers various companies like TCS, Cognizant, Capgemini,
          Accenture and Persistent, where I chose to go with Persistent, worked
          there as an intern and then eventually it turned it full time role.
        </p>
        <div className="pt-6">
          <div className="font-medium pb-1 text-black">Projects</div>
          <div className="text-black">
            <div className="font-semibold text-base">ETM Server Split</div>
            <div className="font-medium">01/2024 – 08/2023</div>
          </div>
          <div className="py-2">
            <p>
              Worked on IBM’s ELM (Eng. Lifecycle Management App) platform
              within the ETM (Eng. Test Management App), utilized the REST API’s
              of ELM to develop a Java-based microservice to facilitate the
              migration of all artifacts, ensuring seamless transfer of their
              properties and attributes between ETM project areas.{" "}
              <ExperienceModal />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
