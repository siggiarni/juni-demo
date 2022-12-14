import "../styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

function juni({ Component, pageProps }) {
    return (
        <div className={inter.className}>
            <Component {...pageProps} />
        </div>
    );
}

export default juni;
