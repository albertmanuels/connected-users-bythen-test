import Modal from "@/components/shared/Modal";
import Image from "next/image";
import React from "react";
import useDetailUserModal from "./DetailUserModal.hook";
import { DetailUserModalProps } from "./DetailUserModal.types";

const DetailUserModal = (props: DetailUserModalProps) => {
  const { isOpen, setOpen } = props;
  const { data } = useDetailUserModal(props);

  return (
    <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
      <div className={`flex flex-col justify-center rounded-lg p-4 shadow-md`}>
        <h3 className="mb-4 text-center text-xl">Detail Information</h3>
        <div className="mb-5">
          <Image
            src={data?.avatar || ""}
            alt="user photo"
            width={80}
            height={80}
            className="mx-auto rounded-full"
          />
        </div>

        <div className="mb-5 text-center">
          <h3 className="text-xl">{`${data?.first_name} ${data?.last_name}`}</h3>
          <span className="text-lg">{data?.email}</span>
        </div>
      </div>
    </Modal>
  );
};

export default DetailUserModal;
