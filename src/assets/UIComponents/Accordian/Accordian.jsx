import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

export const questions = [
    { id: 1, question: "What is JavaScript?", answer: "JavaScript is a programming language used to create dynamic web pages." },
    { id: 2, question: "What is a variable?", answer: "A variable stores data values that can be used later." },
    { id: 3, question: "What is the difference between let and const?", answer: "let can be reassigned, const cannot be reassigned." },
    { id: 4, question: "What is an array?", answer: "Array is a collection of values stored in a single variable." },
    { id: 5, question: "What is an object?", answer: "Objects store key–value pairs." },

    { id: 6, question: "What is a function?", answer: "A block of reusable code that performs a task." },
    { id: 7, question: "What is an arrow function?", answer: "A shorter function syntax introduced in ES6." },
    { id: 8, question: "What is a callback?", answer: "A function passed as an argument to another function." },
    { id: 9, question: "What is a promise?", answer: "An object representing the result of an async operation." },
    { id: 10, question: "What is async/await?", answer: "Syntax to write asynchronous code like synchronous code." },
]

const Accordian = () => {
    const [showAnswer, setShowAnswer] = useState(null)

    const toggle = (id) => {
        setShowAnswer(showAnswer === id ? null : id)
    }
    return (
  <div className='min-h-screen w-full bg-black flex flex-col items-center pt-10 px-4'>

  <p className='font-mono text-red-500 underline text-2xl font-bold mb-6'>
    10 Important Questions of JS
  </p>

  <div className='w-full max-w-[600px]'>
    {questions.map((t) => (
      <div 
        key={t.id} 
        className='bg-gray-900 rounded-xl p-4 mb-4 shadow-lg border border-gray-700'
      >

        {/* Question Row */}
        <div 
          onClick={() => toggle(t.id)}
          className='flex justify-between items-center cursor-pointer'
        >
          <p className='text-blue-400 font-semibold text-lg'>
            {t.id}. {t.question}
          </p>

          {showAnswer === t.id ? (
            <ChevronUp className='h-6 w-6 text-white bg-gray-600 rounded-full p-1' />
          ) : (
            <ChevronDown className='h-6 w-6 text-white bg-gray-600 rounded-full p-1' />
          )}
        </div>

        {/* Answer */}
        {showAnswer === t.id && (
          <p className='text-gray-300 text-sm mt-3 leading-relaxed'>
            {t.answer}
          </p>
        )}
      </div>
    ))}
  </div>
</div>

    )
}

export default Accordian
