import React from "react";
import { CustomAvatar } from "../components/custom/Avatar";
import Link from "next/link";

const IntroSection = () => {
  return (
    <div>
      <CustomAvatar />
      <div className="pt-3 text-black">
        <div className="text-lg font-semibold leading-none">Arihant K.</div>
        <div className="font-semibold text-base">Full Stack Developer</div>
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <p>
          Hi my name is Arihant, I am just a guy with strong passion for
          technology, development, design and self - improvement. My work
          emphasizes simplicity, minimalism, and meticulous attention to
          details. Please checkout{" "}
          <Link
            href={"/Resume.docx"}
            className="text-light-gray underline font-medium"
          >
            My Resume
          </Link>{" "}
          as well.
        </p>

        <p>
          I have experience in web development, designing, database admin,
          deployment and maintenance. Each project allows me to refine my skills
          and develop better products.
        </p>
        <p>
          I utilize a range of tools and software to bring my ideas to life,
          keeping up with the latest trends and technologies In my projects.{" "}
          <span className="font-semibold">
            My ultimate goal is to work on projects that solve real life
            problems, because I don't think there is anything I can do better
            than this.
          </span>
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
