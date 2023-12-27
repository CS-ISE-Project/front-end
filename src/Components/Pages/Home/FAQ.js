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
    question: "Pourquoi 'Science'?",
    answer:
      "'Science' propose une interface conviviale pour des recherches approfondies d'articles scientifiques. Explorez des contenus de qualité, effectuez des recherches ciblées",
  },
  {
    id: 2,
    question: "Est-ce que je peux sauvegarder l'article?",
    answer:
      "Oui, vous avez la possibilité de sauvegarder l'article préférés. De plus, vous pouvez également le télécharger pour une consultation hors ligne.",
  },
  {
    id: 3,
    question: "Comment rechercher des articles ?",
    answer:
      "accédez à la page de recherche, et saisissez des mots-clés dans la barre de recherche. Vous pouvez affiner les résultats par titre, auteurs, institutions et période de publication.",
  },
  {
    id: 4,
    question: "'Science' respecte-t-il la crédibilité scientifique?",
    answer:
      "Absolument, 'Science' s'engage à maintenir la plus haute crédibilité scientifique. Nous veillons à ce que les articles présentés sur la plateforme soient issus de sources fiables et respectent les normes académiques. De plus, les modérateurs ont la possibilité de corriger les erreurs éventuelles pour assurer la qualité et la fiabilité des contenus.",
  },
];

function FAQ() {
  return (
    <div className="flex px-[8vw] flex-col gap-[4vh] items-center">
      <h1 className="font-regular text-Typo font-Natasha md:text-[4rem] text-[2rem] text-center">
        Questions fréquemment posées
      </h1>
      <div className="w-[100%] flex flex-col gap-[4vh] font-Gilroy ">
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
