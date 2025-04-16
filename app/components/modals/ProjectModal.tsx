import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const ProjectModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="pt-2 cursor-pointer hover:underline text-light-gray font-medium">
          <span className="flex items-center gap-2">
            More Details
            <MoveRight />
          </span>
        </span>
      </DialogTrigger>
      <DialogContent className="w-[97%] min-h-[500px] h-[80vh] overflow-y-auto ">
        <DialogHeader>
          <DialogTitle className="text-black font-medium text-lg">
            Personal Projects
          </DialogTitle>
        </DialogHeader>
        <div className="text-sm">
          <div className="pt-2">
            <div className="text-black font-medium text-lg leading-5">
              Full Stack Developer
            </div>
            <div className="text-black font-medium">
              <div className="pt-1">09/2023 - Present</div>
            </div>
            <p className="pt-3">
              I’ve worked on multiple full-stack projects and successfully
              deployed them online. Some of these projects led to freelancing
              opportunities, allowing me to work directly with clients to
              deliver real-world solutions. Below is my vercel dashboard for
              reference.
            </p>
          </div>
          <div>
            <img
              className="py-6"
              src="/dashboard.png"
              alt="my vercel dashboard"
            />
          </div>
          <div className="flex flex-col gap-6 pt-6">
            <div>
              <div className="font-medium text-light-gray pb-1 text-base">
                Projects
              </div>
              <div className="pb-2 font-medium">
                Some Projects take 2 min initially to load so please wait.
                Thanks!
              </div>
              <div className="text-black">
                <div className="font-semibold text-base">LazyDev</div>
                <div className="font-medium">03/2025 - Present</div>
              </div>
              <div className="py-2">
                <p>
                  Lazy Dev is an ultimate dev productivity tool, it automates
                  creating resume, project portfolio, and live links along with
                  a dashboard. Users can just log in, update once, and share
                  their personalized portfolio page. Built for devs who who are
                  too lazy to create a portfolio website.
                </p>
                <ul className="list-disc p-4 flex flex-col gap-1">
                  <li>
                    <Link
                      target="_blank"
                      className="underline cursor-pointer font-medium"
                      href={"https://lazydev-web.onrender.com/"}
                    >
                      {" "}
                      Live Link
                    </Link>
                    ,{" "}
                    <Link
                      target="_blank"
                      className="underline cursor-pointer font-medium"
                      href={"https://github.com/arihantXD/lazydev"}
                    >
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <span className="font-medium text-black">
                      Test Credentials -{" "}
                    </span>
                    test@gmail.com (email), test@123 (password)
                  </li>
                  <li>
                    <span className="font-medium text-black">
                      Tech Stack -{" "}
                    </span>
                    Next Js, Node Js, Typescript, Express, Prisma, PostgreSql.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="text-black">
                <div className="font-semibold text-base">Jobify</div>
                <div className="font-medium">03/2025 - Present</div>
              </div>
              <div className="py-2">
                <p>
                  This project project is designed for streamlined job
                  application tracking. Users can effortlessly categorize job
                  roles tech or non - tech, and classify job type.
                </p>
                <ul className="list-disc p-4 flex flex-col gap-1">
                  <li>
                    <Link
                      target="_blank"
                      className="underline cursor-pointer font-medium"
                      href={"https://jobify-sdkn.onrender.com/"}
                    >
                      {" "}
                      Live Link
                    </Link>
                    ,{" "}
                    <Link
                      target="_blank"
                      className="underline cursor-pointer font-medium"
                      href={"https://github.com/arihantXD/Jobify"}
                    >
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <span className="font-medium text-black">
                      Test Credentials -
                    </span>
                    demo1@gmail.com (email), - demo@123 (password)
                  </li>
                  <li>
                    <span className="font-medium text-black">
                      Tech Stack -{" "}
                    </span>
                    React Js, Node Js, Express, Mongoose, MongoDB.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="text-black">
                <div className="font-semibold text-base">GenZ</div>
                <div className="font-medium">03/2025 - Present</div>
              </div>
              <div className="py-2">
                <p>
                  It is a full-stack e-commerce store for Gen Z clothing brand.
                  Users can seamlessly register, log in, add items to their
                  cart, and simulate the purchase process. GenZ offers a dummy
                  flow from registration to purchase, providing a user-friendly
                  experience for exploring and interacting with the project.
                </p>
                <ul className="list-disc p-4 flex flex-col gap-1">
                  <li>
                    <Link
                      target="_blank"
                      className="underline cursor-pointer font-medium"
                      href={"https://gen-z-five.vercel.app/"}
                    >
                      {" "}
                      Live Link
                    </Link>
                    ,{" "}
                    <Link
                      target="_blank"
                      className="underline cursor-pointer font-medium"
                      href={"https://github.com/arihantXD/genz"}
                    >
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <span className="font-medium text-black">
                      Test Credentials -{" "}
                    </span>
                    demo1@gmail.com (email), demo@123 (password)
                  </li>
                  <li>
                    <span className="font-medium text-black">
                      Tech Stack -{" "}
                    </span>
                    React Js, Node Js, Express, Mongoose, MongoDB.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="font-semibold text-base text-black">
                Other Projects
              </div>
              <ul className="px-4 py-2 list-disc flex flex-col gap-1">
                <li>
                  <span className="font-medium text-black">
                    CaffeZilla (MERN Stack) -{" "}
                  </span>
                  <span>
                    <Link
                      target="_blank"
                      className="underline cursor-pointer"
                      href={"https://caffe-zilla.vercel.app/"}
                    >
                      Live Link
                    </Link>
                    ,{" "}
                    <Link
                      target="_blank"
                      className="underline cursor-pointer"
                      href={"https://github.com/arihantXD/CaffeZilla"}
                    >
                      GitHub
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="font-medium text-black">
                    Weather.io 2.0 (React Js) -{" "}
                  </span>
                  <span>
                    <Link
                      target="_blank"
                      className="underline cursor-pointer"
                      href={
                        "https://weather-io2-4lfbqklqx-arihantxd.vercel.app/"
                      }
                    >
                      Live Link
                    </Link>
                    ,{" "}
                    <Link
                      target="_blank"
                      className="underline cursor-pointer"
                      href={"https://github.com/arihantXD/Weather.io2"}
                    >
                      GitHub
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="font-medium text-black">
                    Project Overlap (Startup landing page) -{" "}
                  </span>
                  <span>
                    <Link
                      target="_blank"
                      className="underline cursor-pointer"
                      href={
                        "https://overlap-fyrobfcdl-arihantxds-projects.vercel.app/"
                      }
                    >
                      Live Link
                    </Link>
                    ,{" "}
                    <Link
                      target="_blank"
                      className="underline cursor-pointer"
                      href={"https://github.com/arihantXD/OverlapClone"}
                    >
                      GitHub
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="font-medium text-black">Resume V1 - </span>
                  <span>
                    <Link
                      target="_blank"
                      className="underline cursor-pointer"
                      href={
                        "https://portfolio-website-5p7h2l8ij-arihantxd.vercel.app"
                      }
                    >
                      Live Link
                    </Link>
                    ,{" "}
                    <Link
                      target="_blank"
                      className="underline cursor-pointer"
                      href={"https://github.com/arihantXD/Portfolio-Website"}
                    >
                      GitHub
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="font-medium text-black">Resume V2 - </span>
                  <span>
                    <Link
                      target="_blank"
                      className="underline cursor-pointer"
                      href={
                        "https://portfolio-v02-i3hh69xs1-arihantxds-projects.vercel.app"
                      }
                    >
                      Live Link
                    </Link>
                    ,{" "}
                    <Link
                      target="_blank"
                      className="underline cursor-pointer"
                      href={"https://github.com/arihantXD/Portfolio-V02"}
                    >
                      GitHub
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="font-medium text-black">
                    Weather.io V1 -{" "}
                  </span>
                  <span>
                    <Link
                      target="_blank"
                      className="underline cursor-pointer"
                      href={"https://weather-336lbuv61-arihantxd.vercel.app/"}
                    >
                      Live Link
                    </Link>
                    ,{" "}
                    <Link
                      target="_blank"
                      className="underline cursor-pointer"
                      href={"https://github.com/arihantXD/Weather.io"}
                    >
                      GitHub
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="font-medium text-black">Paytm - </span>
                  <span>
                    <Link
                      target="_blank"
                      className="underline cursor-pointer"
                      href={"https://github.com/arihantXD/paytm"}
                    >
                      GitHub
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="font-medium text-black">Rustro - </span>
                  <span>
                    <Link
                      target="_blank"
                      className="underline cursor-pointer"
                      href={"https://github.com/arihantXD/Restro"}
                    >
                      GitHub
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="font-medium text-black">DrawIt - </span>
                  <span>
                    <Link
                      target="_blank"
                      className="underline cursor-pointer"
                      href={"https://github.com/arihantXD/excelidraw"}
                    >
                      GitHub
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <DialogTrigger asChild>
          <span className="cursor-pointer hover:underline text-light-gray font-medium">
            Close
          </span>
        </DialogTrigger>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
