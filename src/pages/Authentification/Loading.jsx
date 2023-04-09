import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-random-image bg-cover bg-no-repeat">
      <div className="flex justify-center rounded-xl bg-tertiary bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="flex-grow-0 w-8 h-8 border-4 border-x-white border-y-secondary rounded-full animate-spin" />
        <p className="ml-2 pl-2 text-2xl">cargando...</p>
      </div>
    </div>
  );
};

export default Loading;
