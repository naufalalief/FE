import React, { useState } from "react";
import ChatbotInterface from "./components/ChatbotInterface";
import Statistics from "./components/Statistics";
import AddFaq from "./components/AddFaq";
import FaqList from "./components/FaqList";
import Notification from "./components/Notification";

const App = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
    { text: "Which payment can I use?", sender: "user" },
    {
      text: "We accept various payment methods to facilitate your transactions, such as credit/debit cards, e-wallets, and bank transfers",
      sender: "bot",
    },
  ]);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [faqs, setFaqs] = useState({
    "which payment methods can i use?":
      "We accept various payment methods to facilitate your transactions, such as credit/debit cards (Visa, Mastercard), e-wallets (GoPay, OVO), and bank transfers. You can choose the payment method that best suits your preference during checkout.",
    "are there any additional costs on top of the product price?":
      "In addition to the product price, you may be charged a shipping fee depending on your location and the shipping method chosen. The shipping cost will be shown in detail before you finalize the payment.",
    "how can i track my order?":
      "You can track your order easily through your account. Once your order is confirmed, you will receive an email with a tracking number. Simply enter the tracking number into the tracking page on our website to see the latest delivery status.",
  });

  const [notification, setNotification] = useState({
    visible: false,
    message: "",
  });

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessages = [...messages, { text: message, sender: "user" }];
      setMessages(newMessages);

      const lowerCaseMessage = message.toLowerCase();
      const faqKey = Object.keys(faqs).find((key) =>
        key.includes(lowerCaseMessage)
      );
      const response =
        faqs[faqKey] ||
        "Wait a minute, I will ask customer service to help you";

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response, sender: "bot" },
        ]);
      }, 1000);

      setMessage("");
    }
  };

  const handleFaqSubmit = (e) => {
    e.preventDefault();
    if (question.trim() && answer.trim()) {
      setFaqs({ ...faqs, [question.toLowerCase()]: answer });
      setQuestion("");
      setAnswer("");
      setNotification({ visible: true, message: "FAQ added successfully!" });
    }
  };

  const closeNotification = () => {
    setNotification({ visible: false, message: "" });
  };

  return (
    <div className="bg-bg h-full">
      <nav>
        <div className="w-full h-20 bg-primary"></div>
      </nav>
      <main>
        <section className="overflow-hidden w-full">
          <div className="container mx-auto px-4 sm:px-6 xl:px-8">
            <div className="flex flex-col xl:flex-row gap-7 justify-between items-start">
              <ChatbotInterface
                messages={messages}
                handleSubmit={handleSubmit}
                message={message}
                handleChange={handleChange}
              />
              <Statistics />
            </div>
          </div>
        </section>

        <section className="overflow-hidden w-full mb-7">
          <div className="container mx-auto px-4 sm:px-6 xl:px-8">
            <div className="flex flex-col xl:flex-row gap-7 justify-between items-start">
              <AddFaq
                question={question}
                setQuestion={setQuestion}
                answer={answer}
                setAnswer={setAnswer}
                handleFaqSubmit={handleFaqSubmit}
              />
              <FaqList faqs={faqs} />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="w-full h-20 bg-primary"></div>
      </footer>
      {notification.visible && (
        <Notification
          message={notification.message}
          onClose={closeNotification}
        />
      )}
    </div>
  );
};

export default App;
