import Modal from "@/components/shared/Modal";
import Image from "next/image";
import React from "react";
import useDetailUserModal from "./DetailUserModal.hook";
import { DetailUserModalProps } from "./DetailUserModal.types";
import { create, useModal } from "@ebay/nice-modal-react";
import { modal } from "../../Connections.constants";
import closeNiceModal from "@/lib/closeNiceModal";

const DetailUserModal = create((props: DetailUserModalProps) => {
  const { data } = useDetailUserModal(props);
  const modalId = modal.DETAIL_USER;
  const { visible } = useModal(modalId);

  return (
    <Modal isOpen={visible} onClose={() => closeNiceModal(modalId)}>
      <div className={`flex flex-col justify-center rounded-lg p-4 shadow-md`}>
        <h3 className="mb-4 text-center text-xl">Detail Information</h3>
        <div className="mb-5">
          <Image
            src={data?.avatar || ""}
            alt="user photo"
            width={80}
            height={80}
            className="avatar mx-auto"
          />
        </div>

        <div className="mb-5 text-center">
          <h3 className="text-xl">{`${data?.first_name} ${data?.last_name}`}</h3>
          <span className="text-lg">{data?.email}</span>
        </div>
      </div>
    </Modal>
  );
});

export default DetailUserModal;
