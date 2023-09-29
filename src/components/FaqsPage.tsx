// FaqsPage.tsx
import React, { useState } from 'react';
import './FaqsPage.css';

const FaqsPage: React.FC = () => {
  const faqsData = [
    { question: 'Question 1', answer: 'Answer to Question 1' },
    { question: 'Question 2', answer: 'Answer to Question 2' },
    { question: 'Question 3', answer: 'Answer to Question 3' },
    // Add more questions and answers as needed
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleExpandClick = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="faqs-page">
      <h1>You’ll have questions!</h1>
      <p>Everything you need to know about the course and payments.</p>
      <div className="faqs-container">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className={`faq-box ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => handleExpandClick(index)}
          >
            <div className="question">{faq.question}</div>
            {expandedIndex === index && <div className="answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsPage;
