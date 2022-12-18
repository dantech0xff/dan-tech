import LinkWrapper from "./LinkWrapper";

const Experience = ({
  title,
  company,
  location,
  range,
  url,
  text1,
  text2,
  text3,
  text4,
}) => {
  return (
    <div className="my-3">
      <div className="flex flex-row text-2xl">
        <span className="font-bold text-gray-800 dark:text-gray-100">
          {title}
        </span>{" "}
        <span className="text-gray-500 dark:text-gray-400">&nbsp;@&nbsp;</span>{" "}
        <span className="font-bold text-primary-color-500">
          <LinkWrapper href={url} className="company">
            {company}
          </LinkWrapper>
        </span>
      </div>
      <div>
        <div className="p-0 font-mono text-lg font-bold text-gray-900 dark:text-gray-500">
          {range}
        </div>
        <div className="p-2 text-lg">
          <div className="flex flex-row ">
            <div className="mr-2 text-primary-color-500"> &#8227;</div>
            <div className="text-gray-800 dark:text-gray-200">{text1}</div>
          </div>
          <div className="flex flex-row">
            <div className="mr-2 text-primary-color-500"> &#8227;</div>
            <div className="text-gray-800 dark:text-gray-200">{text2}</div>
          </div>
          <div className="items-top flex flex-row">
            <div className="mr-2 text-primary-color-500"> &#8227;</div>
            <div className="text-gray-800 dark:text-gray-200">{text3}</div>
          </div>
          <div className={`items-top flex flex-row ${text4 ? "" : "hidden"}`}>
            <div className="mr-2 text-primary-color-500"> &#8227;</div>
            <div className="text-gray-800 dark:text-gray-200">{text4}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
