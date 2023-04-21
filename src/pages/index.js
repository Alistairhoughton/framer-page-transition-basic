import { Inter } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { exit } from "../../utils/animations";
import styles from "./pagestyles/container.module.css";
import Navbar from "../../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <motion.main
      className="h-screen w-full bg-slate-300"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Navbar />

      <section className="min-h-screen h-auto w-full bg-slate-500">
        Home Page
      </section>

      <section className="w-full bg-slate-300 flex justify-center items-center min-h-screen h-auto flex-col gap-28 py-28">
        <Link
          className={styles.link_container}
          href="/portfolio"
          scroll={false}
        >
          <motion.div
            className={styles.green_container}
            variants={exit}
          ></motion.div>
        </Link>
      </section>
    </motion.main>
  );
}
