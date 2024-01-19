"use client";

import React from "react";
import { ReactNode } from "react";

interface UserData {
    name: string;
    dob: string;
    description: string;
   }
   

interface ButtonProps {
//   children: ReactNode;
  className?: string;
  appName: string;
  userData:UserData[]
}

export const Modal = ({  className, appName, userData }: ButtonProps) => {
  return (
    // <button
    //   className={className || ''}
    //   onClick={() => alert(`Hello from your ${appName} app!`)}
    // >
    //   {children}
    // </button>
    <>
    {userData.map((ud)=>(
        <p>
{ud.name}
        </p>
    ))}

    </>
  );
};