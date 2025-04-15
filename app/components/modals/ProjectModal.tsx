import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProjectModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="cursor-pointer hover:underline text-light-gray font-medium">
          More...
        </span>
      </DialogTrigger>
      <DialogContent className="w-[95%] min-h-[500px] h-[80vh] overflow-y-auto text-xs">
        <DialogHeader>
          <DialogTitle className="text-black font-medium text-lg test">
            Personal Projects
          </DialogTitle>
        </DialogHeader>
        <div className="">
          <div className="pt-2">
            <div className="text-black font-medium text-lg leading-5">
              Full Stack Developer
            </div>
            <div className="text-black font-medium">
              <div className="pt-1">09/2023 - Present</div>
            </div>
            <p className="pt-3">
              I have worked on multiple projects and hosted them online, some
              projects eventually transitioned into freelancing opportunities, I
              my work is client-focused results and delivering impactful
              solutions.
            </p>
          </div>
          <div>
            <img className="py-2" src="/dashboard.png" alt="" />
          </div>
          <div className="flex flex-col gap-8 pt-8">
            <div>
              <div className="font-medium text-light-gray pb-2 text-base">
                Projects
              </div>
              <div className="text-black">
                <div className="font-semibold text-base">LazyDev</div>
                <div className="font-medium">03/2025 - Present</div>
              </div>
              <div className="py-2">
                <p>
                  Developed an end-to-end project which offered various tours in
                  different modes and difficulties where end users can select
                  tours according to their interests
                </p>
                <ul className="list-disc p-2 flex flex-col gap-1">
                  <li>
                    Implemented class diagram for the project, created Enum and
                    Entities.
                  </li>
                  <li>
                    Project Req. - Java, Java Spring Boot, SQL, Postman, HTML,
                    Tailwind CSS, React Js.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="text-black">
                <div className="font-semibold text-base">LazyDev</div>
                <div className="font-medium">03/2025 - Present</div>
              </div>
              <div className="py-2">
                <p>
                  Developed an end-to-end project which offered various tours in
                  different modes and difficulties where end users can select
                  tours according to their interests
                </p>
                <ul className="list-disc p-2 flex flex-col gap-1">
                  <li>
                    Implemented class diagram for the project, created Enum and
                    Entities.
                  </li>
                  <li>
                    Project Req. - Java, Java Spring Boot, SQL, Postman, HTML,
                    Tailwind CSS, React Js.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="text-black">
                <div className="font-semibold text-base">LazyDev</div>
                <div className="font-medium">03/2025 - Present</div>
              </div>
              <div className="py-2">
                <p>
                  Developed an end-to-end project which offered various tours in
                  different modes and difficulties where end users can select
                  tours according to their interests
                </p>
                <ul className="list-disc p-2 flex flex-col gap-1">
                  <li>
                    Implemented class diagram for the project, created Enum and
                    Entities.
                  </li>
                  <li>
                    Project Req. - Java, Java Spring Boot, SQL, Postman, HTML,
                    Tailwind CSS, React Js.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="font-semibold text-base text-black">
                Other Projects
              </div>
              <ul>
                <li>Weather.io</li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
