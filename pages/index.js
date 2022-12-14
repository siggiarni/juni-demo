import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Juni demo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <Link href="/" class={styles.logo}>
                    <Image src="/logo.svg" width={121} height={64} alt="Júni" className={styles.logo__symbol} />
                </Link>
            </header>

            <Popover.Group className={styles.nav} as="nav">
                <Popover className={styles.nav__item}>
                    <Popover.Button className={styles.nav__button}>Um okkur</Popover.Button>
                    <Transition
                        enter={styles.panel__enter}
                        enterFrom={styles.panel__enterfrom}
                        enterTo={styles.panel__enterto}
                        leave={styles.panel__leave}
                        leaveFrom={styles.panel__leavefrom}
                        leaveTo={styles.panel__leaveto}
                    >
                        <Popover.Panel className={styles.nav__panel}>
                            <div className={styles.nav__list}>
                                <Link href="/" class={styles.nav__link}>
                                    Item
                                </Link>
                                <Link href="/" class={styles.nav__link}>
                                    Item
                                </Link>
                                <Link href="/" class={styles.nav__link}>
                                    Item
                                </Link>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>

                <Popover className={styles.nav__item}>
                    <Popover.Button className={styles.nav__button}>Verkefni</Popover.Button>
                    <Transition
                        enter={styles.panel__enter}
                        enterFrom={styles.panel__enterfrom}
                        enterTo={styles.panel__enterto}
                        leave={styles.panel__leave}
                        leaveFrom={styles.panel__leavefrom}
                        leaveTo={styles.panel__leaveto}
                    >
                        <Popover.Panel className={styles.nav__panel}>
                            <div className={styles.nav__list}>
                                <Link href="/" class={styles.nav__link}>
                                    Item
                                </Link>
                                <Link href="/" class={styles.nav__link}>
                                    Item
                                </Link>
                                <Link href="/" class={styles.nav__link}>
                                    Item
                                </Link>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
                <Popover className={styles.nav__item}>
                    <Popover.Button className={styles.nav__button}>Þjónusta</Popover.Button>
                    <Transition
                        enter={styles.panel__enter}
                        enterFrom={styles.panel__enterfrom}
                        enterTo={styles.panel__enterto}
                        leave={styles.panel__leave}
                        leaveFrom={styles.panel__leavefrom}
                        leaveTo={styles.panel__leaveto}
                    >
                        <Popover.Panel className={styles.nav__panel}>
                            <div className={styles.nav__list}>
                                <Link href="/" class={styles.nav__link}>
                                    Item
                                </Link>
                                <Link href="/" class={styles.nav__link}>
                                    Item
                                </Link>
                                <Link href="/" class={styles.nav__link}>
                                    Item
                                </Link>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </Popover.Group>

            <main className={styles.main}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </main>
        </>
    );
}
