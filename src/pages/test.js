import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { squareVariants } from "../../utils/animations";

export default function Test() {
  const [isClicked, setIsClicked] = useState(false);
  const [canAnimate, setCanAnimate] = useState(false);
  const [boundingTop, setBoundingTop] = useState(1);
  const [initialBgXScale, setInitialBgXScale] = useState(1);
  const [initialBgYScale, setInitialBgYScale] = useState(1);
  const squareRef = useRef(null);

  useEffect(() => {
    const boundingRect = squareRef.current.getBoundingClientRect();
    const bgWidth = boundingRect.right - boundingRect.left;
    const bgHeight = boundingRect.bottom - boundingRect.top;

    setBoundingTop(boundingRect.top);

    const initialBgXScale = bgWidth / document.documentElement.clientWidth;
    setInitialBgXScale(initialBgXScale);

    const initialBgYScale = bgHeight / document.documentElement.clientHeight;
    setInitialBgYScale(initialBgYScale);

    console.log("initialX", initialBgXScale);
    console.log("initialY", initialBgYScale);

    setCanAnimate(isClicked);


    // const heightRatio = window.innerHeight / (0.34 * window.innerWidth);
    // console.log("heightScaleRatio", heightRatio);




  }, [isClicked]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <motion.section className="w-full h-auto bg-slate-100 flex items-center justify-center flex-col overflow-hidden">
      <section className="w-full h-screen bg-slate-100 flex items-center justify-center">
        <h1 className="text-[5rem]">hello</h1>
      </section>
      <section className="w-full h-[200vh] bg-slate-300 gap-28 flex items-center justify-start pt-28 flex-col ">
        <div
          style={{
            width: "71vw",
            height: "34vw",
          }}
          className="top_container relative p-28"
        >
          <motion.div
            ref={squareRef}
            className="background square bg-orange-600 p-14 m-auto w-full h h-full absolute top-0 left-0 origin-top"
            onClick={handleClick}
            initial="initial"
            animate={canAnimate ? "animate" : "initial"}
            variants={squareVariants(
              boundingTop,
              initialBgXScale,
              initialBgYScale
            )}
          ></motion.div>
        </div>
        <div
          style={{
            width: "71vw",
            height: "34vw",
          }}
          className="bg-red-400 rounded-[4px]"
        ></div>
      </section>
    </motion.section>
  );
}
