import { useEffect, useState } from "react";
import { TbArrowBigTop } from "react-icons/tb";

const ScrollTop = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleWindowScroll = () => {
      setShow(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <div
      className={`fixed right-16 bottom-8 hidden flex-col gap-3 ${
        show ? "md:flex" : "md:hidden"
      }`}
    >
      <button
        aria-label="Scroll To Top"
        type="button"
        onClick={handleScrollTop}
        classsName="pushable"
      >
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front">
          <TbArrowBigTop className="h-5 w-5"></TbArrowBigTop>
        </span>
      </button>
    </div>
  );
};

export default ScrollTop;
