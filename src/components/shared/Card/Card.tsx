import React from "react";
import { CardProps } from "./Card.types";

const Card = ({ className, onClick, children }: CardProps) => {
  return (
    <div className={`card ${className ?? ""}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
