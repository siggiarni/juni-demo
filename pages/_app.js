import "../styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

function juni({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default juni;
