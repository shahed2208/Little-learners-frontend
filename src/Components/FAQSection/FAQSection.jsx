
import './FAQSection.css';
import React, { useState } from 'react';
const faqData = [
    {
      question: 'What are the school hours at Little Learners Academy?',
      answer: 'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.',
    },
    {
      question: 'How do you handle food allergies and dietary restrictions?',
      answer: 'We work closely with parents to understand and accommodate any food allergies or dietary restrictions their child may have. We have strict protocols in place to ensure the safety of all our students.',
    },
    {
      question: 'What is the teacher-to-student ratio at Little Learners Academy?',
      answer: 'Our teacher-to-student ratio is kept low to ensure that each child receives individual attention and support.',
    },
      {
      question: 'Is there a uniform policy for students?',
      answer: 'Yes, we have a simple and comfortable uniform policy. Details about the uniform can be found in our parent handbook.',
    },
      {
      question: 'How do you handle discipline and behavior management?',
      answer: 'We use positive reinforcement techniques to encourage good behavior and address any behavioral issues in a constructive and supportive manner.',
    },
      {
      question: 'What extracurricular activities are available for students?',
      answer: 'We offer a variety of extracurricular activities, including sports, arts, and music programs. These activities are designed to enhance learning and provide opportunities for children to explore their interests.',
    },
      {
      question: 'How do I apply for admission to Little Learners Academy?',
      answer: 'You can find the application form and instructions on our website, or you can contact our admissions office for more information.',
    },
  ];
function FAQSection() {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
      setOpenQuestion(openQuestion === index ? null : index);
    };
  
  return (
    <div>
    <section className="faq-section">
      <div className="faq-content">
        <button className="faq-button">Solutions For The Doubts</button>
        <h2>Frequently Asked Questions</h2>
        <p>Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.</p>
      </div>
    </section>
      <section className="faq-section">
      <div className="faq-content">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-items">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleQuestion(index)}>
                {item.question}
                <span className="toggle-icon">{openQuestion === index ? '−' : '+'}</span> {/* رمز الفتح والإغلاق */}
              </div>
              {openQuestion === index && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default FAQSection;