import React from "react";
import { Link } from "react-router-dom";

function Article(props) {
  return props.carousel === 0 ? (
    <div className="w-[84vw] flex justify-between items-start">
      <div className="flex items-center justify-center bg-white px-4 py-4">
        <img src="/Article.svg" alt="article" />
      </div>
      <div className="flex flex-col w-[100%] px-8 gap-4">
        <h2 className="text-left lg:text-[2rem] md:text-[1.5rem] text-[1.3rem] font-extrabold text-Blue66">
          {props.title}
        </h2>
        <h3 className="text-Typo lg:text-[1.7rem] md:text-[1.3rem] text-[1.1rem] font-semibold">
          Auteur:{" "}
          <span className="lg:text-[1.4rem] text-[0.9rem] md:text-[1.2rem] text-[#A8A8A8]">
            {props.author}
          </span>
        </h3>
        <h3 className="text-Typo lg:text-[1.7rem] md:text-[1.3rem] text-[1.1rem] font-semibold">
          Abstract:{" "}
          <span className="lg:text-[1.2rem] text-[0.9rem] md:text-[1rem] text-[#A8A8A8]">
            {props.abstract}
          </span>
        </h3>
        <Link className="py-4" to="/user/article">
          <button className="bg-Purple100 text-white md:px-12 md:py-4 px-8 py-2 rounded-[8px] font-semibold lg:text-[1.2rem] text-[1rem]">
            Voir
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="bg-white shadow-xl lg:w-[26vw] md:w-[40vw] rounded-[20px] flex flex-col items-center">
      <div className="w-[96%] bg-[#F0F0F0] flex item-center justify-center rounded-[8px] my-[1vw] py-16">
        <img src="/Article.svg" alt="article" />
      </div>
      <h2 className="py-8 px-8 font-semibold text-[1.4rem] text-Typo">
        {props.title}
      </h2>
      <p className="text-[#A8A8A8] px-8 pb-8 text-[1.1rem] max-w-[100%] truncate">
        {props.references}
      </p>
      <div className="flex items-center gap-4 px-8 w-[100%]">
        <img src="/Author.svg" alt="author" />
        <h3 className="text-[1.1rem] text-Typo font-semibold max-w-[100%] truncate">
          Auteur : {props.author}
        </h3>
      </div>
      <Link className="w-[100%] px-8 py-8" to="/user/article">
        <button
          className="bg-Purple100 text-white w-[100%] py-4 rounded-[8px] font-semibold text-[1.2rem]"
          to="/user/article"
        >
          Voir
        </button>
      </Link>
    </div>
  );
}

export default Article;
