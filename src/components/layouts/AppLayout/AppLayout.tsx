"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { Roboto } from "next/font/google";
import Sidebar from "@/components/shared/Sidebar";
import Header from "@/components/shared/Header";
import { AppProvider } from "./App.context";
import NiceModal from "@ebay/nice-modal-react";
import GlobalModalPortal from "@/components/shared/GlobalModalPortal/GlobalModalPortal";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
});

const AppLayout = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <NiceModal.Provider>
              <div className="flex h-full">
                <Sidebar />
                <div className="h-[100vh] w-full flex-col overflow-x-hidden">
                  <Header />
                  <main className="w-full overflow-x-hidden">{children}</main>
                </div>
              </div>
              <GlobalModalPortal />
            </NiceModal.Provider>
          </AppProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default AppLayout;
