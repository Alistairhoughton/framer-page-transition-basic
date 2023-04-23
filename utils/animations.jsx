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
    y: -113,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.7,
    },
  },
};

export const squareVariants = (
  boundingTop,
  initialBgXScale,
  initialBgYScale
) => {
  return {
    initial: {
      position: "absolute",
      transform: `translateY(0px) scale(1, 1)`,
      borderRadius: 4,
    },
    animate: {
      transform: "translateY(0) scale(1, 1)",
      position: "fixed",
      borderRadius: 0,
      transition: {
        transform: {
          from: `translateY(${boundingTop}px) scale(${initialBgXScale}, ${initialBgYScale})`,
          duration: 0.7,
          ease: [0.6, 0.01, 0.05, 0.95],
        },
        position: {
          from: "fixed",
        },
      },
    },
  };
};
