import Link from "next/link";

interface IconLinkBtnProps {
  href: string;
  icon: string;
  size?: string;
}

export function IconLinkBtn({
  href,
  icon,
  size = "text-2xl",
}: IconLinkBtnProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center"
    >
      <span
        className={`material-symbols-outlined ${size} group-hover:text-accent transition-colors`}
      >
        {icon}
      </span>
    </Link>
  );
}