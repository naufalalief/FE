import React from "react";
import PropTypes from "prop-types";

const FaqList = ({ faqs }) => {
  return (
    <div className="w-full lg:w-3/4 h-full bg-primary flex flex-col space-y-3 p-4 sm:p-7 mt-7 rounded-xl shadow">
      <h1 className="font-bold text-center text-xl sm:text-2xl">
        Most Search FAQ (Oldest to Newest)
      </h1>
      {Object.entries(faqs).map(([q, a]) => (
        <div key={q} className="flex flex-col bg-secondary p-4 rounded-xl">
          <h2>{q.charAt(0).toUpperCase() + q.slice(1)}</h2>
          <p>{a}</p>
        </div>
      ))}
    </div>
  );
};

FaqList.propTypes = {
  faqs: PropTypes.object.isRequired,
};

export default FaqList;
