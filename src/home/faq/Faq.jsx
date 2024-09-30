import { useState } from "react";
import { FaQuestion } from "react-icons/fa";

const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "Our return policy allows returns within 30 days of purchase. Please keep your receipt.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping usually takes 5-7 business days, depending on your location.",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support through email and chat.",
    },
  ];

  return (
    <div className="container mx-auto p-5 md:space-y-12 space-y-6">
      <h2 className="md:text-3xl text-xl font-medium mb-4 flex items-center gap-3"><FaQuestion className="text-[#991747]"/> Frequently Asked Questions</h2>
      <div className="md:w-[60%] w-full mx-auto h-[175px]">
        {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b pb-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <button
              className="text-xl font-normal w-7 h-7 text-white bg-[#991747] rounded-full"
              aria-expanded={open === index}
            >
              {open === index ? "-" : "+"}
            </button>
          </div>
          <div
            className={`mt-2 text-gray-600 transition-all duration-300 ease-in-out ${
              open === index ? "block" : "hidden"
            }`}
          >
            {faq.answer}
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;