import React from "react";
import PropTypes from "prop-types";

const AddFaq = ({
  question,
  setQuestion,
  answer,
  setAnswer,
  handleFaqSubmit,
}) => {
  return (
    <div className="w-full lg:w-1/4 h-full bg-primary flex flex-col space-y-3 p-4 sm:p-7 mt-7 rounded-xl shadow">
      <h1 className="font-bold text-center text-xl sm:text-2xl">Add FAQ</h1>
      <form className="p-4" onSubmit={handleFaqSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="question"
          >
            Question
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="question"
            type="text"
            placeholder="Enter your question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="answer"
          >
            Answer
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="answer"
            type="text"
            placeholder="Enter the answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-accent hover:bg-accent/95 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

AddFaq.propTypes = {
  question: PropTypes.string.isRequired,
  setQuestion: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
  setAnswer: PropTypes.func.isRequired,
  handleFaqSubmit: PropTypes.func.isRequired,
};

export default AddFaq;
