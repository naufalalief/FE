import React, { useState } from "react";

const ChatbotInterface = ({
  messages,
  handleSubmit,
  message,
  handleChange,
}) => {
  return (
    <div className="w-3/4 h-full bg-accent mt-7 rounded-xl shadow">
      <div className="p-7 flex flex-col">
        <h1 className=" text-2xl font-bold space-y-6">Chatbot Interface</h1>
        <div className="flex flex-col bg-primary p-4 h-full mt-5 rounded-lg">
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center space-x-3">
              <img src="/icon/chatbot/icon.png" alt="icon" />
              <h2 className="">Chatbot</h2>
            </div>
            <h2 className="text-green-600">Online</h2>
          </div>
          <div
            className="flex flex-col h-[212px] overflow-y-auto px-2"
            id="box"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.sender === "user" ? "bg-secondary self-end" : "bg-white"
                } w-max p-4 rounded-xl mt-4 max-w-lg`}
              >
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex justify-between items-center rounded-xl mt-4">
              <input
                type="text"
                className="w-[800px] h-[50px] rounded-xl p-4"
                placeholder="Type a message"
                value={message}
                onChange={handleChange}
              />
              <input
                type="submit"
                value="Send"
                className="bg-accent text-white rounded-xl w-[80px] h-[40px] cursor-pointer hover:bg-accent/95"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatbotInterface;
