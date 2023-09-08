import React from "react";

const FAQItem = ({ question, answer }) => {
  return (
    <div className="collapse collapse-arrow join-item border-b group">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-lg group-hover:text-primary-soft-red">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
