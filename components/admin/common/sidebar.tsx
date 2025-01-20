import Link from "next/link";
import { ROUTES } from "./constants";

export const Sidebar: React.FC = () => {
  return (
    <>
      <Link href={`/admin/${ROUTES.GAMES}`}>Games</Link>
    </>
  );
};
