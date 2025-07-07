import React from "react";

export function PreLoader() {
  return (
    <div className="flex-col gap-4 w-full h-screen flex items-center justify-center bg-white dark:bg-background">
      <div className="w-20 h-20 border-4 border-transparent text-c-primary text-4xl animate-spin flex items-center justify-center border-t-c-primary rounded-full">
        <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full" />
      </div>
    </div>
  );
}
