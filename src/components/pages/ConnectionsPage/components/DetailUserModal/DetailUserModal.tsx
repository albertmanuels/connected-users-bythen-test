import Modal from "@/components/shared/Modal";
import Image from "next/image";
import React from "react";
import useDetailUserModal from "./DetailUserModal.hook";
import { DetailUserModalProps } from "./DetailUserModal.types";
import { create, useModal } from "@ebay/nice-modal-react";
import { modal } from "../../Connections.constants";
import closeNiceModal from "@/lib/closeNiceModal";
import UserPlaceholderImg from "@/public/icons/user_placeholder.png";
import Spinner from "@/components/shared/Motion/Spinner";

const DetailUserModal = create((props: DetailUserModalProps) => {
  const modalId = modal.DETAIL_USER;
  const { visible } = useModal(modalId);
  const { data, isLoading } = useDetailUserModal(props);

  return (
    <Modal isOpen={visible} onClose={() => closeNiceModal(modalId)}>
      <div className={`flex flex-col justify-center rounded-lg p-4 shadow-md`}>
        <h3 className="mb-4 text-center text-xl">Detail Information</h3>

        <div className="mb-5">
          <Image
            src={data?.avatar || UserPlaceholderImg}
            alt="user photo"
            width={80}
            height={80}
            className="avatar mx-auto"
          />
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center">
            <Spinner width={30} height={30} />
          </div>
        ) : (
          <div className="mb-5 text-center">
            <h3 className="text-xl">{`${data?.first_name} ${data?.last_name}`}</h3>
            <span className="text-lg">{data?.email}</span>
          </div>
        )}
      </div>
    </Modal>
  );
});

export default DetailUserModal;
