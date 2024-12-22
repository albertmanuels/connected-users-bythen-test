"use client";
import Header from "@/components/shared/Header";
import SearchBar from "@/components/shared/SearchBar";
import React, { ReactNode } from "react";

const ConnectionsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-[100vh] w-full flex-col overflow-x-hidden">
      <Header>
        <SearchBar />
      </Header>
      <main className="w-full overflow-x-hidden px-4">{children}</main>
    </div>
  );
};

export default ConnectionsLayout;
