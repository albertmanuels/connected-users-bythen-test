"use client";
import React from "react";
import UserCard from "./components/UserCard";
import useHomePage from "./Home.hook";
import DetailUserModal from "./components/DetailUserModal";

const HomePage = () => {
  const { userListData, isLoading, modal, setModal } = useHomePage();

  return (
    <div className="sm:main-content mt-16 w-full pb-20">
      <ul className="grid-cols-auto-fill grid gap-5">
        {userListData?.map((user, idx) => (
          <UserCard
            data={user}
            handleOnEdit={() => {}}
            onClick={(id) => {
              setModal({
                isOpen: true,
                id: Number(id),
              });
            }}
          />
        ))}
      </ul>

      <DetailUserModal
        id={Number(modal.id)}
        isOpen={modal.isOpen}
        setOpen={(isOpen) => {
          setModal({
            isOpen,
            id: modal.id,
          });
        }}
      />
    </div>
  );
};

export default HomePage;
