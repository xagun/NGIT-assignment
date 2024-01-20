"use client";

import React from "react";
import { ReactNode } from "react";

interface UserData {
    name: string;
    dob: string;
    description: string;
   }
   

interface ButtonProps {
  userData:UserData[]
}

export const Modal = ({  userData }: ButtonProps) => {
  return (
    // <button
    //   className={className || ''}
    //   onClick={() => alert(`Hello from your ${appName} app!`)}
    // >
    //   {children}
    // </button>
    <>
    {userData.map((ud)=>(
        <p className="p-4 bg-blue-600">
{ud.name}
        </p>
    ))}
    

    </>
  );
};