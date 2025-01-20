import Link from "next/link";
import { ROUTES } from "./constants";

export const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      {ROUTES.map((route, index) => (
        <Link key={`route-${index}`} href={`/admin/${route.route}`}>
          Games
        </Link>
      ))}
    </div>
  );
};
