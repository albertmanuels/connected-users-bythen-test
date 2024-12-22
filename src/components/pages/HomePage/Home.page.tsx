"use client";
import React from "react";
import UserCard from "./components/UserCard";
import useHomePage from "./Home.hook";
import DetailUserModal from "./components/DetailUserModal";
import EditUserModal from "./components/EditUserModal";
import { ModalDef } from "@ebay/nice-modal-react";
import { modal } from "./Home.constants";

const HomePage = () => {
  const { userListData, isLoading, handleOpenDetail, handleOpenEdit } =
    useHomePage();

  return (
    <div className="sm:main-content mt-16 w-full pb-20">
      {isLoading && <h1 className="text-xl">Loading...</h1>}
      <ul className="grid grid-cols-auto-fill gap-5">
        {userListData?.map((user) => (
          <UserCard
            key={user.id}
            data={user}
            handleOnEdit={(id) => handleOpenEdit(id)}
            onClick={(id) => handleOpenDetail(id)}
          />
        ))}
      </ul>

      <ModalDef id={modal.DETAIL_USER} component={DetailUserModal} />
      <ModalDef id={modal.EDIT_USER} component={EditUserModal} />
    </div>
  );
};

export default HomePage;
