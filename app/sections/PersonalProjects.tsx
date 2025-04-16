import Link from "next/link";
import ProjectModal from "../components/modals/ProjectModal";
import { MoveUpRight } from "lucide-react";

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
      <div className="pt-2">
        <p>
          I’ve worked on multiple full-stack projects and successfully deployed
          them online. Some of these projects led to freelancing opportunities,
          allowing me to work directly with clients to deliver real-world
          solutions. I am deeply passionate about building impactful,
          user-centric products and always focused on delivering results that
          align with client goals and expectations.
        </p>
        <div className="pt-6">
          <div className="font-medium pb-1 text-black">Projects</div>
          <ul className="flex flex-col gap-4">
            <li className="flex flex-col gap-1 pt-2">
              <div className="text-base font-semibold text-black">
                LazyDev -{" "}
              </div>
              <div>
                Lazy Dev is an ultimate dev productivity tool, it automates
                creating resume, project portfolio, and live links along with a
                dashboard. Users can just log in, update once, and share their
                personalized portfolio page.{" "}
                <span>
                  <Link
                    target="_blank"
                    className="underline cursor-pointer font-medium"
                    href={"https://lazydev-web.onrender.com/"}
                  >
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
                </span>
              </div>
              <div className="pt-1">
                <span className="font-medium text-black">
                  Test Credentials -
                </span>{" "}
                test@gmail.com (email), test@123 (password)
              </div>
            </li>
            <li className="flex flex-col gap-1 pt-2">
              <div className="text-base font-semibold text-black">GenZ - </div>
              <div>
                It is a full-stack e-commerce store for Gen Z clothing brand.
                Users can seamlessly register, log in, add items to their cart,
                and simulate the purchase process.{" "}
                <span>
                  <Link
                    target="_blank"
                    className="underline cursor-pointer font-medium"
                    href={"https://gen-z-five.vercel.app/"}
                  >
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
                </span>
              </div>
              <div className="pt-1">
                <span className="font-medium text-black">
                  Test Credentials -
                </span>{" "}
                demo1@gmail.com (email), - demo@123 (password) <ProjectModal />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
