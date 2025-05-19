import React from 'react';

function JoinRequestLoadingModal() {
  return (
    <div className="w-full h-full fixed inset-0   bg-gray-900/70 flex justify-center items-center text-start">
      <div className="lg:w-1/3 md:w-1/2 w-10/12 flex flex-col gap-2 justify-center items-center">
        <div className="loader"></div>
        <p>Waiting for room owner response...</p>
      </div>
    </div>
  );
}

export default JoinRequestLoadingModal;
