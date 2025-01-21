import { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import Head from "next/head";

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ title, children }) => {
  return (
    <div className="h-full">
      <Head>
        <title>{title || ""}</title>
      </Head>
      <div className="flex items-stretch h-full">
        <div className="w-[30%] border-r border-deep-blue">
          <Sidebar />
        </div>
        <div className="w-[70%]">{children}</div>
      </div>
    </div>
  );
};

export default PageWrapper;
