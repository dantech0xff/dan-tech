import SocialIconWrapper from "./icon/SocialIconWrapper";

const ProjectItem = ({
  title,
  description,
  imgSrc,
  href,
  github,
  tech1,
  tech2,
  tech3,
}) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: "544px" }}>
    <div className="h-full transform overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-transparent bg-opacity-20 transition duration-200 hover:scale-105 hover:rounded-md hover:border-primary-500 hover:bg-gray-300 dark:border-gray-700 dark:hover:border-primary-500 dark:hover:bg-gray-800 transition duration-200 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500">
      <div className="p-5">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {title}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="flex flex-row justify-between pb-3">
          <div className="text-sm text-gray-400">
            {tech1} &#8226; {tech2} &#8226; {tech3}
          </div>
        </div>
        <div className="my-2 flex flex-row justify-end">
          <div className="">
            {github ? <SocialIconWrapper kind="github" href={github} /> : null}
          </div>
          <div className="mx-2">
            {href ? <SocialIconWrapper kind="external" href={href} /> : null}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectItem;
