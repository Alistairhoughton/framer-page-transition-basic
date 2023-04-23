import "@/styles/globals.css";
import { v4 as uuidv4 } from "uuid";

import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  const componentKey = uuidv4();
  return (
    <div>
      <AnimatePresence
        mode="wait"
        initial={false}
        // onExitComplete={() => window.scrollTo({ top: 0 })}
        onExitComplete={() =>
          setTimeout(() => window.scrollTo({ top: 0 }), 20)
        }
      >
        <Component {...pageProps} key={componentKey} />
      </AnimatePresence>
    </div>
  );
}
