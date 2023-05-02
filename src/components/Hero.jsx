import React from "react";

import { apple } from "../assets copy/index";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <p  className='sm:text-7xl text-4xl font-extrabold head_gradient sm:h-24' > Summify</p>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text '>
        Smart Summarizer with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4.....</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;