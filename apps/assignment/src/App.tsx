"use client";
// src/App.tsx
import React, { useState, useEffect } from "react";
import { Modal } from "assignment-ui";
import { Skeleton } from "@/components/ui/skeleton";

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setTimeout(async () => {
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setIsLoading(false);
        setData(result.users.slice(0, 5));
      }, 3000);
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Modal>
        {isLoading ? (
          <>
            <Skeleton className="h-6 w-[180px] m-2" />

            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-center space-x-2 my-4">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[150px]" />
                    <Skeleton className="h-4 w-[80px]" />
                  </div>
                </div>
              ))}
          </>
        ) : (
          <>
            <h1 className="text-lg m-2">24 Birthdays Today</h1>

            <ul>
              {data.map(
                (item: {
                  id: string;
                  firstName: string;
                  lastName: string;
                  age: number;
                  image: string;
                }) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-2 my-4"
                  >
                    <img src={item.image} className="h-10 w-10 rounded-full" />
                    <div className="space-y-2">
                      <p className="h-3 w-[200px] text-sm">
                        {item.firstName} {item.lastName}{" "}
                      </p>
                      <p className="h-3 w-[100px] opacity-70 text-xs">
                        {item.age} years
                      </p>
                    </div>
                  </div>
                )
              )}
            </ul>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-[#e171cd] to-[#ff69a4] text-white px-4 py-2 my-4 rounded text-white w-[280px] h-[50px] shadow-[0px_5px_8px_0px_rgba(251,152,202,255)]">
                View All
              </button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default App;
