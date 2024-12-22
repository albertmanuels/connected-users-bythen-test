"use client";
import { useAppContext } from "@/components/layouts/AppLayout/App.context";
import React from "react";

const HomePage = () => {
  const { isSidebarShow } = useAppContext();
  return (
    <div>
      HomePage
      <h2>Sidebar {isSidebarShow ? "OPEN" : "CLOSE"}</h2>
    </div>
  );
};

export default HomePage;
