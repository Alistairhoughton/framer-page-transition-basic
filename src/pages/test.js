import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { squareVariants } from "../../utils/animations";

export default function Test() {
  const [isClicked, setIsClicked] = useState(false);
  const [heightRatio, setNewHeightRatio] = useState(1);
  const [widthRatio, setNewWidthRatio] = useState(1);
  const [offset, setOffset] = useState(0);
  const [scaled, setScaled] = useState(0);
  const squareRef = useRef(null);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const heightRatio = window.innerHeight / (0.34 * window.innerWidth);
      const widthRatio = window.innerWidth / (0.71 * window.innerWidth);
      const newHeightRatio = Math.min(heightRatio);
      const newWidthRatio = Math.min(widthRatio);
      setNewHeightRatio(newHeightRatio);
      setNewWidthRatio(newWidthRatio);
    }
  }, []);

  useEffect(() => {
    const yPositionTop = squareRef.current.getBoundingClientRect().top;
    const newOffset = yPositionTop / heightRatio;
    console.log("y", yPositionTop);
    setOffset(newOffset);
  }, [isClicked]);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const test = window.innerHeight / (0.34 * window.innerWidth);
  //     const yPositionTop = squareRef.current.getBoundingClientRect().top;
  //     // this doesn't work
  //     setScaled((yPositionTop - window.innerHeight) / test);
  //   }
  // }, []);

  //this worked until I changed the container and flex start.... I need it so I can put the container anywhere for when I style with margin and padding.

  return (
    <motion.section className="w-full h-auto bg-slate-100 flex items-center justify-center flex-col overflow-hidden">
      <section className="w-full h-screen bg-slate-100 flex items-center justify-center">
        <h1 className="text-[5rem]">hello</h1>
      </section>
      <section className="w-full h-[200vh] bg-slate-300 flex items-start justify-center ">
        <motion.div
          ref={squareRef}
          className="square bg-orange-600"
          style={{
            width: "71vw",
            height: "34vw",
          }}
          onClick={handleClick}
          variants={squareVariants(
            isClicked,
            heightRatio,
            widthRatio,
            offset,
            scaled
          )}
          initial="initial"
          animate="animate"
          onAnimationComplete={() => {}}
        />
      </section>
      <section className="w-full h-screen bg-slate-100 flex items-center justify-center"></section>
    </motion.section>
  );
}
