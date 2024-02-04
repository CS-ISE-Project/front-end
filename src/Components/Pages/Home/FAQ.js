import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FAQElement(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        !isOpen
          ? "px-[4vw] border-2 py-[3vh] border-Blue66 rounded-[8px] flex flex-col gap-[2vh] transition duration-700 border-Purple100 text-Typo"
          : "px-[4vw] border-2 py-[4vh] border-Purple100 rounded-[8px] flex flex-col gap-[2vh] bg-Purple100 text-white shadow-[0_35px_60px_15px_rgba(43, 45, 66, 1)] transition duration-700"
      }`}
    >
      <button
        onClick={toggleOpen}
        className="flex items-center w-[100%] justify-between text-[1.3rem] md:text-[1.6rem]"
      >
        {props.question} {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="md:text-[1.2rem]">{props.answer}</div>}
    </div>
  );
}

const faqs = [
  {
    id: 1,
    question: "Why 'Article Harbor'?",
    answer:
      "Article Harbor' offers a user-friendly interface for in-depth research on scientific articles. Explore high-quality content and conduct targeted searches.",
  },
  {
    id: 2,
    question: "Can I save an article?",
    answer:
      "Yes, you have the option to save your favorite article. Additionally, you can also download it for offline viewing.",
  },
  {
    id: 3,
    question: "How to search for articles?",
    answer:
      "Go to the search page and enter keywords in the search bar. You can refine the results by title, authors, institutions, and publication period.",
  },
  {
    id: 4,
    question: "Does 'Article Harbor' respect scientific credibility?",
    answer:
      "Absolutely, 'Article Harbor' is committed to maintaining the highest scientific credibility. We ensure that the articles featured on the platform come from reliable sources and adhere to academic standards. Additionally, moderators have the ability to correct any potential errors to ensure the quality and reliability of the content.",
  },
];

function FAQ() {
  return (
    <div className="flex px-[8vw] flex-col gap-[4vh] items-center">
      <h1 className="font-regular text-Typo font-Natasha md:text-[4rem] text-[2rem] text-center">
        Frequently Asked Questions
      </h1>
      <div className="w-[100%] flex flex-col gap-[4vh]">
        {faqs.map((faq) => (
          <FAQElement
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
