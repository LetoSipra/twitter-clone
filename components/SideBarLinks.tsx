import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  text: string;
  active?: boolean;
  href: string;
}

function SideBarLinks({ Icon, text, active, href }: Props) {
  return (
    <>
      <Link href={href}>
        <div
          className={`hoverAnimation flex items-center justify-center space-x-3 text-xl text-[#d9d9d9] xl:justify-start ${
            active && "font-bold"
          }`}>
          <Icon className="h-7 w-7" />
          <span className="hidden xl:inline">{text}</span>
        </div>
      </Link>
    </>
  );
}

export default SideBarLinks;
