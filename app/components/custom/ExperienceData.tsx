const ExperienceData = () => {
  return (
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
          I joined Persistent System Ltd. just after my college, during college
          I got offers various companies like TCS, Cognizant, Capgemini,
          Accenture and Persistent, where I chose to go with Persistent, worked
          there as an intern and then eventually it turned it full time role.
        </p>
      </div>
      <div className="flex flex-col gap-4 pt-8">
        <div>
          <div className="font-medium text-light-gray pb-1 text-base">
            Projects
          </div>
          <div className="text-black">
            <div className="font-semibold text-base">Johny Traveller</div>
            <div className="font-medium">09/2023 - 12/2023</div>
          </div>
          <div className="py-2">
            <p>
              Developed an end-to-end Full Stack App which offered various tours
              in different modes and difficulties where end users can select
              tours according to their interests, get registered into a tour
              batch.
            </p>
            <ul className="list-disc p-4 flex flex-col gap-1">
              <li>
                Implemented class diagram for the project, created Enum,
                Entities and APIs for fetching and filtering the requested
                resources. Also developed UI for Login and Dashboard Page.
              </li>
              <li>
                <span className="font-medium text-black"> Tech Stack - </span>
                Java, Java Spring Boot, SQL, Postman, HTML, Tailwind CSS, React
                Js.
              </li>
            </ul>
          </div>
        </div>
        <div>
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
              properties and attributes between ETM project areas.
            </p>
            <ul className="list-disc p-4 flex flex-col gap-1">
              <li>
                My utility supported migration of all artifacts like as
                Testscripts, Testcases, Testplans, Testphases, along with their
                Records, Results and properties.
              </li>
              <li>
                Provided enhanced migration efficiency and data integrity,
                significantly reducing manual effort by 95% as I automated the
                whole migration process. Developed clean and efficient codebase
                and made the product client ready.
              </li>
              <li>
                <span className="font-medium text-black"> Tech Stack - </span>
                ELM App, Java, Java Spring Boot, My Sql.
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
              These microservices work hand in hand, I worked on these utilities
              to enhance their functionality utilizing IBM’s ELM platform, to
              capture, store and re-create the links created post migration
              between the artifacts of the ERM (Eng. Requirement Management App)
              and ETM application.
            </p>
            <ul className="list-disc p-4 flex flex-col gap-1">
              <li>
                Reducing manual effort by 90%, as the links are creted by runnig
                my utility post migration.
              </li>
              <li>
                <span className="font-medium text-black">Link-Grabber – </span>
                Enhanced this utility to facilitate fetching and storing of
                links between ETM and ERM artifacts in the database.
              </li>
              <li>
                <span className="font-medium text-black">Relinker – </span>
                Enhanced this utility to facilitate fetching the links from the
                database and then re-creating those artifacts links in the
                target applications post migration.
              </li>
              <li>
                <span className="font-medium text-black">Tech Stack – </span>
                Java, Java Spring Boot, My Sql, Postman.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-black">
            <div className="font-semibold text-base">Web Sphere Admin</div>
            <div className="font-medium">11/2024 – Present</div>
          </div>
          <div className="py-2">
            <p>
              I handled more than 100 servers based on Web Sphere and Web Sphere
              Liberty, made sure they are up and running by resolving issues in
              case of issues, exception and server down conditions.
            </p>
            <ul className="list-disc p-4 flex flex-col gap-1">
              <li>
                I worked as server admin, performed automated patching of
                servers on monthly basis, certificated updation and
                administration.
              </li>
              <li>
                <span className="font-medium text-black">Tech Stack – s</span>
                Web Sphere and WS Liberty, Ansible, ELM, UCD, UCR.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceData;
