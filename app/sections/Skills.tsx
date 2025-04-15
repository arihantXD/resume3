const Skills = () => {
  return (
    <div className="pt-12">
      <div className="text-light-gray text-base font-medium">Tech Stack</div>
      <div className="px-2 pb-4 pt-6 flex flex-wrap justify-center [&>div]:w-[80px] [&>div]:border [&>div]:border-lighter-gray [&>div]:bg-extra-light-gray gap-4 ">
        <div className="p-2 rounded  flex flex-col items-center gap-1 w-fit ">
          <img className="w-[30px] h-[30px]" src="/html.svg" alt="" />
          <div className="text-xs font-medium text-dark-gray">HTML</div>
        </div>
        <div className="p-2 rounded  flex flex-col items-center gap-1 w-fit ">
          <img className="w-[30px] h-[30px]" src="/css.svg" alt="" />
          <div className="text-xs font-medium text-dark-gray">CSS</div>
        </div>
        <div className="p-2 rounded  flex flex-col items-center gap-1 w-fit ">
          <img className="w-[30px] h-[30px]" src="/javascript.svg" alt="" />
          <div className="text-xs font-medium text-dark-gray">Javascript</div>
        </div>
        <div className="p-2 rounded  flex flex-col items-center gap-1 w-fit ">
          <img className="w-[30px] h-[30px]" src="/typescript.svg" alt="" />
          <div className="text-xs font-medium text-dark-gray">Typescript</div>
        </div>
        <div className="p-2 rounded  flex flex-col items-center gap-1 w-fit ">
          <img className="w-[30px] h-[30px]" src="/react.svg" alt="" />
          <div className="text-xs font-medium text-dark-gray">React Js</div>
        </div>
        <div className="p-2 rounded  flex flex-col items-center gap-1 w-fit ">
          <img className="w-[30px] h-[30px]" src="/nextjs.svg" alt="" />
          <div className="text-xs font-medium text-dark-gray">Next Js</div>
        </div>
        <div className="p-2 rounded  flex flex-col items-center gap-1 w-fit ">
          <img className="w-[30px] h-[30px]" src="/nodejs.svg" alt="" />
          <div className="text-xs font-medium text-dark-gray">Node Js</div>
        </div>
        <div className="p-2 rounded  flex flex-col items-center gap-1 w-fit ">
          <img className="w-[30px] h-[30px]" src="/express.svg" alt="" />
          <div className="text-xs font-medium text-dark-gray">Express</div>
        </div>
        <div className="p-2 rounded  flex flex-col items-center gap-1 w-fit ">
          <img className="w-[30px] h-[30px]" src="/java.svg" alt="" />
          <div className="text-xs font-medium text-dark-gray">Java</div>
        </div>
        <div className="p-2 rounded  flex flex-col items-center gap-1 w-fit ">
          <img className="w-[30px] h-[30px]" src="/mongodb.svg" alt="" />
          <div className="text-xs font-medium text-dark-gray">Mongo DB</div>
        </div>
        <div className="p-2 rounded  flex flex-col items-center gap-1 w-fit ">
          <img className="w-[30px] h-[30px]" src="/postgresql.svg" alt="" />
          <div className="text-xs font-medium text-dark-gray">PostgresSql</div>
        </div>
        <div className="p-2 rounded  flex flex-col items-center gap-1 w-fit ">
          <img className="w-[30px] h-[30px]" src="/github.svg" alt="" />
          <div className="text-xs font-medium text-dark-gray">GitHub</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
