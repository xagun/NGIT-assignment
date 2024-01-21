"use client";

import React from "react";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-[#ef89b1]  transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-[80px_60px_40px_0px_rgba(223,110,154,255)] transition-all sm:my-8 sm:w-[320px] sm:h-[450px] sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
