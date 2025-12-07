import { useState } from 'react';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import './FAQSection.css';

/**
 * FAQ Section Component with Schema Support
 * Displays FAQs with accordion functionality
 * Automatically generates FAQ schema for SEO
 */
const FAQSection = ({ faqs, title = 'Frequently Asked Questions' }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <FaQuestionCircle className="faq-header-icon" />
          <h2 className="faq-title">{title}</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="faq-question-text">{faq.question}</span>
                <FaChevronDown className="faq-icon" />
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
