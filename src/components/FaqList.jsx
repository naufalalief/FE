import React from "react";

const FaqList = ({ faqs }) => {
  return (
    <div className="w-3/4 h-full bg-primary flex flex-col space-y-3 p-7 mt-7 rounded-xl shadow">
      <h1 className="font-bold text-center text-2xl">
        Most Search FAQ (Oldest to Newest)
      </h1>
      {Object.entries(faqs).map(([q, a], index) => (
        <div key={index} className="flex flex-col bg-secondary p-4 rounded-xl">
          <h2>{q.charAt(0).toUpperCase() + q.slice(1)}</h2>
          <p>{a}</p>
        </div>
      ))}
    </div>
  );
};

export default FaqList;
