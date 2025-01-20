import { AppProps } from "next/app";
import "../styles/globals.css";
import { Sidebar } from "@cards/components/common/sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex items-stretch">
      <div className="w-[30%] border-r border-deep-blue">
        <Sidebar />
      </div>
      <div className="w-[70%]">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
