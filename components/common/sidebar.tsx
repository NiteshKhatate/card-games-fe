import Link from "next/link";
import { ROUTES } from "./constants";
import { useRouter } from "next/router";

export const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      {ROUTES.map((route, index) => (
        <MenuItem
          key={`route-${index}`}
          path={`${route.route}`}
          title={route.title}
        />
      ))}
    </div>
  );
};

interface MenuItemProps {
  path: string;
  title: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ path, title }) => {
  const { pathname } = useRouter();
  const isActive = pathname.includes(path);
  return (
    <Link
      href={`${path}`}
      className={`p-2 w-full text-center ${isActive && "bg-ivory"}`}
    >
      {title}
    </Link>
  );
};
