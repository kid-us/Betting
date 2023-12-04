import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div className="faq-item" onClick={toggleAnswer}>
      <p className="fs-6 fw-semibold cursor my-4">
        {question} <span className="bi-caret-down-fill ms-3"></span>
      </p>

      <div
        className={`answer text-warning ps-3 fw-semibold footer-link ${
          isAnswerVisible ? "" : "hidden"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
