import React from "react";

const Loading = () => {
  return (
    <div className="w-full min-h-full flex flex-col justify-center items-center">
      <div className="h-32 w-32 relative flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-t-info-600 border-b-primary-550"></div>
        <div className="text-info-400 absolute w-full h-full top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
          <p>thinking...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
