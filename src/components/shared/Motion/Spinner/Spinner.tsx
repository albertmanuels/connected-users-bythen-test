import React from "react";
import { motion } from "framer-motion";

const Spinner = ({
  width = 20,
  height = 20,
}: {
  width?: number;
  height?: number;
}) => {
  const styleContainer: React.CSSProperties = {
    position: "relative",
    width: width,
    height: height,
  };

  const styleSpan: React.CSSProperties = {
    display: "block",
    width: width,
    height: height,
    border: "3px solid #eee",
    borderTop: "3px solid #2D3134",
    borderRadius: "50%",
    boxSizing: "border-box",
    position: "absolute",
    top: 0,
    left: 0,
  };

  const spinTransition = {
    repeat: Infinity,
    ease: "easeInOut",
    duration: 1,
  };

  return (
    <div style={styleContainer}>
      <motion.span
        animate={{ rotate: 360 }}
        style={styleSpan}
        transition={spinTransition}
      />
    </div>
  );
};

export default Spinner;
