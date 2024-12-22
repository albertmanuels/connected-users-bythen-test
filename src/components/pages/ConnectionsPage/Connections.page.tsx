"use client";
import React from "react";
import UserCard from "./components/UserCard";
import useConnectionsPage from "./Connections.hook";
import DetailUserModal from "./components/DetailUserModal";
import EditUserModal from "./components/EditUserModal";
import { ModalDef } from "@ebay/nice-modal-react";
import { modal } from "./Connections.constants";

const ConnectionsPage = () => {
  const {
    isLoading,
    handleOpenDetail,
    handleOpenEdit,
    userList,
    observerRef,
    isFetchingNextPage,
  } = useConnectionsPage();

  return (
    <div className="sm:main-content mt-16 w-full pb-20 md:mt-28">
      {isLoading && <h1 className="text-xl">Loading...</h1>}
      <ul className="grid grid-cols-auto-fill gap-5">
        {userList?.map((user) => (
          <UserCard
            key={user.id}
            data={user}
            handleOnEdit={(id) => handleOpenEdit(id)}
            onClick={(id) => handleOpenDetail(id)}
          />
        ))}
      </ul>

      {(userList?.length ?? 0) > 0 && <div ref={observerRef} />}
      {isFetchingNextPage && <h2>Fetching data baru...</h2>}

      <ModalDef id={modal.DETAIL_USER} component={DetailUserModal} />
      <ModalDef id={modal.EDIT_USER} component={EditUserModal} />
    </div>
  );
};

export default ConnectionsPage;
