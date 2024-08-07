import React, { useEffect } from "react";

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Close after 3 seconds
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [onClose]);

  return (
    <div className="fixed flex items-center bottom-4 right-4 bg-bg text-black p-4 rounded shadow-lg">
      <img
        src="/icon/statistics/important.png"
        alt="important"
        className="mr-2"
      />
      <p>{message}</p>
    </div>
  );
};

export default Notification;
