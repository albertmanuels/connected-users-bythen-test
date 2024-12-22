import React, { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

const Modal = ({ isOpen, onClose, children, className }: ModalProps) => {
  if (!isOpen) null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement && e.target.id === "modal-wrapper") {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm ${isOpen ? "inline-block" : "hidden"}`}
      onClick={handleClose}
      id="modal-wrapper"
    >
      <div className={`w-max min-w-[20vw] rounded-md bg-white ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
