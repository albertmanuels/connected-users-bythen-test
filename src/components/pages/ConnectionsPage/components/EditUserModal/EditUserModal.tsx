import Modal from "@/components/shared/Modal";
import Image from "next/image";
import React from "react";
import { EditUserModalProps } from "./EditUserModal.types";
import useEditUserModal from "./EditUserModal.hook";
import { create, useModal } from "@ebay/nice-modal-react";
import { modal } from "../../Connections.constants";
import closeNiceModal from "@/lib/closeNiceModal";
import Spinner from "@/components/shared/Motion/Spinner";

const EditUserModal = create((props: EditUserModalProps) => {
  const modalId = modal.EDIT_USER;
  const { visible } = useModal(modalId);

  const {
    handleOnClose,
    handleOnSubmit,
    data,
    setUseFormData,
    userFormData,
    isSaveLoading,
  } = useEditUserModal(props);

  return (
    <Modal isOpen={visible} onClose={handleOnClose}>
      <div className={`flex flex-col justify-center rounded-lg p-4 shadow-md`}>
        <h3 className="mb-4 text-center text-xl">Edit Detail Information</h3>

        <form onSubmit={handleOnSubmit}>
          <section className="mb-5">
            <Image
              src={data?.avatar || ""}
              alt="user photo"
              width={80}
              height={80}
              className="avatar mx-auto"
            />
          </section>

          <section className="mb-5">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm text-gray-400">
                  First Name
                </label>
                <input
                  className="rounded-sm border-[1px] border-gray-300 p-2"
                  name="firstName"
                  id="firstName"
                  type="text"
                  value={userFormData.first_name}
                  onChange={(e) => {
                    setUseFormData((prev) => ({
                      ...prev,
                      first_name: e.target.value,
                    }));
                  }}
                  disabled={isSaveLoading}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm text-gray-400">
                  Last Name
                </label>
                <input
                  className="rounded-sm border-[1px] border-gray-300 p-2"
                  name="lastName"
                  id="lastName"
                  type="text"
                  value={userFormData.last_name}
                  onChange={(e) => {
                    setUseFormData((prev) => ({
                      ...prev,
                      last_name: e.target.value,
                    }));
                  }}
                  disabled={isSaveLoading}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-gray-400">
                  Email
                </label>
                <input
                  className="rounded-sm border-[1px] border-gray-300 p-2"
                  name="email"
                  id="email"
                  type="email"
                  value={userFormData.email}
                  onChange={(e) => {
                    setUseFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                  }}
                  disabled={isSaveLoading}
                />
              </div>
            </div>
          </section>

          <div className="flex gap-4">
            <button
              type="button"
              className="w-full rounded-md bg-gray-500 px-4 py-1 text-white hover:bg-gray-600"
              onClick={() => closeNiceModal(modalId)}
            >
              Close
            </button>
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-green-500 px-4 py-1 text-center hover:bg-green-600"
            >
              {isSaveLoading ? <Spinner width={15} height={15} /> : "Save"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
});

export default EditUserModal;
