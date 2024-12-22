import React, { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm ${isOpen ? "inline-block" : "hidden"}`}
      onClick={() => {
        onClose();
      }}
      id="modal-wrapper"
    >
      <div className="w-max min-w-[20vw] rounded-md bg-white">{children}</div>
    </div>
  );
};

export default Modal;
