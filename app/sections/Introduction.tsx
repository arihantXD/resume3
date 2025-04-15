import React from "react";
import { CustomAvatar } from "../components/custom/Avatar";

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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
          eius. Lorem ipsum dolor sit amet.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          nulla dolorum illum qui perspiciatis fugit explicabo sapiente eaque
          dolor quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          consectetur, debitis pariatur repudiandae dolorem quas architecto
          error molestiae delectus mollitia, eius eligendi, sequi quia
          doloremque optio fuga veritatis illo magnam?
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
