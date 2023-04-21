export const exit = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
  exit: {
    height: "100vh",
    width: "100%",
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.7,
    },
  },
};


export const squareVariants = (isClicked, heightRatio, widthRatio, offset, scaled ) => {
  return {
    initial: {
      transform: "scale(1)",
      transformOrigin: "center",
      borderRadius: 4,
    },
    animate: {
      transform: `scaleY(${isClicked ? heightRatio : 1}) scaleX(${
        isClicked ? widthRatio : 1
      }) translateY(${isClicked ? -offset + scaled : 0}px)`,
      borderRadius: isClicked ? 0 : 4,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  };
};

