import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ExperienceModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="cursor-pointer hover:underline text-light-gray font-medium">
          More
        </span>
      </DialogTrigger>
      <DialogContent className="w-[95%] min-h-[500px] h-[80vh] overflow-y-auto text-xs">
        <DialogHeader>
          <DialogTitle className="text-black font-medium text-lg test">
            Work Experience
          </DialogTitle>
        </DialogHeader>
        <div className="">
          <div className="pt-2">
            <div className="text-black font-medium text-lg leading-5">
              Peristent System Limited, Nagpur
            </div>
            <div className="text-black font-medium">
              <div className="pt-1">Software Engineer</div>
              <div className="pt-1">09/2023 - 05/2025</div>
            </div>
            <p className="pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              quis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste, veniam?
            </p>
          </div>
          <div className="flex flex-col gap-8 pt-8">
            <div>
              <div className="font-medium text-light-gray pb-2">Projects</div>
              <div className="text-black">
                <div className="font-semibold text-base">Johny Traveller</div>
                <div className="font-medium">09/2023 - 12/2023</div>
              </div>
              <div className="py-2">
                <p>
                  Developed an end-to-end project which offered various tours in
                  different modes and difficulties where end users can select
                  tours according to their interests, get registered into a tour
                  batch and be a part of exciting journey.
                </p>
                <ul className="list-disc p-2 flex flex-col gap-1">
                  <li>
                    Implemented class diagram for the project, created Enum and
                    Entities.
                  </li>
                  <li>
                    Created APIs for fetching and filtering the requested
                    resources.
                  </li>
                  <li>Created UI for Login and Dashboard Page.</li>
                  <li>
                    Project Req. - Java, Java Spring Boot, SQL, Postman, HTML,
                    Tailwind CSS, React Js.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="text-black">
                <div className="font-semibold text-base">ETM Server Split</div>
                <div className="font-medium">01/2024 – 07/2023</div>
              </div>
              <div className="py-2">
                <p>
                  Worked on IBM’s ELM (Eng. Lifecycle Management) platform
                  within the ETM (Eng. Testing Management), migrating various
                  major artifacts such as TestScripts, TestCases, TestPlans,
                  TestPhases, etc. along with their Records and Results, etc.
                </p>
                <ul className="list-disc p-2 flex flex-col gap-1">
                  <li>
                    • Utilized the REST API’s provided by ELM to develop a
                    Java-based utility to facilitate the migration of all
                    artifacts, ensuring seamless transfer of their properties
                    and attributes between ETM project areas.
                  </li>
                  <li>
                    • Provide enhanced migration efficiency and data integrity,
                    significantly reducing manual effort by 50%.
                  </li>
                  <li>
                    • Created clean and efficient codebase and made the product
                    client ready.
                  </li>
                  <li>
                    • Project Req. – Java, Java Spring Boot, My Sql, Postman.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="text-black">
                <div className="font-semibold text-base">
                  Link Grabber and Relinker
                </div>
                <div className="font-medium">07/2024 - Present</div>
              </div>
              <div className="py-2">
                <p>
                  These utilities work hand in hand with each other, worked on
                  these utilities to enhance their functionality utilizing IBM’s
                  ELM platform, to capture, store and re-create the links
                  between the artifacts of the ERM (Eng. Requirement Management)
                  and ETM application that are created post migration.
                </p>
                <ul className="list-disc p-2 flex flex-col gap-1">
                  <li>
                    • • Link-Grabber – Enhanced this utility to facilitate
                    fetching and storing of links between ETM and ERM artifacts
                    in the database.
                  </li>
                  <li>
                    • Relinker – Enhanced this utility to facilitate fetching
                    the links from the database and then re-creating those
                    artifacts links in the target applications post migration.
                  </li>
                  <li>
                    • Project Req. – Java, Java Spring Boot, My Sql, Postman.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="text-black">
                <div className="font-semibold text-base">ETM Server Split</div>
                <div className="font-medium">01/2024 – 07/2023</div>
              </div>
              <div className="py-2">
                <p>
                  Worked on IBM’s ELM (Eng. Lifecycle Management) platform
                  within the ETM (Eng. Testing Management), migrating various
                  major artifacts such as TestScripts, TestCases, TestPlans,
                  TestPhases, etc. along with their Records and Results, etc.
                </p>
                <ul className="list-disc p-2 flex flex-col gap-1">
                  <li>
                    • Utilized the REST API’s provided by ELM to develop a
                    Java-based utility to facilitate the migration of all
                    artifacts, ensuring seamless transfer of their properties
                    and attributes between ETM project areas.
                  </li>
                  <li>
                    • Provide enhanced migration efficiency and data integrity,
                    significantly reducing manual effort by 50%.
                  </li>
                  <li>
                    • Created clean and efficient codebase and made the product
                    client ready.
                  </li>
                  <li>
                    • Project Req. – Java, Java Spring Boot, My Sql, Postman.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExperienceModal;
