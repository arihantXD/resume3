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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, veniam?{" "}
          <ExperienceModal />
        </p>
      </div>
    </div>
  );
};

export default WorkExperience;
