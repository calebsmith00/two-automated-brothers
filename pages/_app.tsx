import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "../components/navbar/navbar";
import type { AppProps } from "next/app";
import { useUrl } from "../hooks/useUrl";

function MyApp({ Component, pageProps }: AppProps) {
  const { activeLink } = useUrl();

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
