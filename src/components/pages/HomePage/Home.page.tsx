"use client";
import React from "react";
import UserCard from "./components/UserCard";
import useHomePage from "./Home.hook";

const HomePage = () => {
  const { userListData, isLoading } = useHomePage();

  return (
    <div className="sm:main-content mt-16 w-full pb-20">
      <ul className="grid-cols-auto-fill grid gap-5">
        {userListData?.map((user, idx) => (
          <UserCard data={user} handleOnEdit={() => {}} onClick={() => {}} />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
