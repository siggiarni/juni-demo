import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Juni demo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <header className={styles.header}>
                    <a href="#" class="logo">
                        <img src="/logo.svg" alt="Júní" className={styles.logo__symbol} />
                    </a>
                </header>
                <nav className={styles.nav}>
                    <menu className={styles.nav__wrapper}>
                        <li className={styles.nav__item}>
                            <a href="#" class={styles.nav__link}>
                                Um okkur
                            </a>
                            <menu class="nav__submenu">
                                <ul>
                                    <li>
                                        <a href="#">Hello</a>
                                    </li>
                                    <li>
                                        <a href="#">Hello</a>
                                    </li>
                                    <li>
                                        <a href="#">Hello</a>
                                    </li>
                                </ul>
                            </menu>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="#" class={styles.nav__link}>
                                Verkefni
                            </a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="#" class={styles.nav__link}>
                                Þjónusta
                            </a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="#" class={styles.nav__link}>
                                x
                            </a>
                        </li>
                    </menu>
                </nav>
                <main className={styles.main}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </main>
            </div>
        </div>
    );
}
