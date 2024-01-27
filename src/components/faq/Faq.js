import React from 'react';
import { MdOutlineLibraryBooks } from "react-icons/md";
import Question from './Question';
import { questions } from "./data";
const Faq = () => {
  return (
    <section id="faq">
      <div className='container faq'>
    <div className='u-title'>
    <MdOutlineLibraryBooks color="orangered" size={30} />
    <h2>FAQ'S</h2>
    <p className='u-text-small u-text-dark'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</div>
<div className='questions'>
  {
    questions.map((question) =>(
<Question title={question.title} answer={question.answer}/>
    ))
  }

</div>
</div>
    </section>
  )
}

export default Faq
