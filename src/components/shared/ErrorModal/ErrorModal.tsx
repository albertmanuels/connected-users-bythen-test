import React from "react";
import Modal from "../Modal";
import { create, useModal } from "@ebay/nice-modal-react";
import closeNiceModal from "@/lib/closeNiceModal";
import Image from "next/image";
import ErrorIcon from "@/public/icons/error.svg";

const ErrorModal = create(
  ({ text = "Data gagal disimpan" }: { text: string }) => {
    const modalId = "ERROR_MODAL";
    const { visible } = useModal(modalId);

    const handleOnClose = () => {
      closeNiceModal(modalId);
    };

    return (
      <Modal
        isOpen={visible}
        onClose={handleOnClose}
        className="w-[70vw] px-3 sm:w-[30vw] md:w-[20vw]"
      >
        <div className="flex flex-col items-center py-5">
          <div className="mb-5 w-20">
            <Image src={ErrorIcon} width={0} height={0} alt="error icon" />
          </div>
          <h2 className="mb-2 text-2xl font-semibold text-green-500">Error</h2>
          <p className="mb-2 text-center font-medium">{text}</p>
          <button
            onClick={handleOnClose}
            className="w-full rounded-md bg-green-500 py-1 font-medium text-white"
          >
            Close
          </button>
        </div>
      </Modal>
    );
  },
);

export default ErrorModal;
