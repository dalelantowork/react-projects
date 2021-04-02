import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions,setQuestions] = useState(data)

  return (
    <div className="container">
    <h3>Questions and answers about login</h3>
    <section className="info">
      {
        questions.map((question)=>{
          return <SingleQuestion key={question.id} {...question} />
        })
      }
    </section>
    {console.log(data)}
    </div>
  );
}

export default App;
