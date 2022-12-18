import { currentDayName } from "../../lib/utils/dateUtils";
import Link from "next/link";
import siteMetadata from "../../data/siteMetadata";

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 flex flex-col items-center">
        <div className="mb-2 hidden text-sm text-gray-500 dark:text-gray-400 md:flex">
          <Link href={siteMetadata.siteUrl} className="link-underline">
            {`${siteMetadata.title} © ${new Date().getFullYear()}`}
          </Link>
        </div>
        {`•`}
        <div className="mx-1">
          <Link href={siteMetadata.siteUrl} className="link-underline">
            Enjoy your {currentDayName()}!
          </Link>
        </div>
        {`•`}
        <div className="mx-1">
          <Link href="/contact" className="link-underline">
            Contact
          </Link>
        </div>
      </div>
      <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 sm:block md:hidden lg:hidden">
        <div className="mx-1">
          <Link href={siteMetadata.siteUrl} className="link-underline">
            {`${siteMetadata.title} © ${new Date().getFullYear()}`}
          </Link>
        </div>
      </div>{" "}
    </footer>
  );
}
