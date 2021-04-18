import './App.css';
import Question from './components/Question';
import question from './data';

function App() {

  return (
    <div className="container">
      <div className="title">
        <h1>Questions And Answers About Login</h1>
      </div>
      <div className="question">
      {
        question.map(q => <Question key={q.id} {...q}/>)
      } 
      </div>
    </div>
  );
}

export default App;
