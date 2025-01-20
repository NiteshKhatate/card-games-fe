import { ReactNode } from "react";
import { Sidebar } from "./sidebar";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-stretch h-full">
      <div className="w-[30%] border-r border-deep-blue">
        <Sidebar />
      </div>
      <div className="w-[70%]">{children}</div>
    </div>
  );
};

export default PageWrapper;
