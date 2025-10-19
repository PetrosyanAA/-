import QuizDirectAnswer from "./components/QuizDirectAnswer";
import QuizMultipleAnswer from "./components/QuizMultipleAnswer";
import QuizSingleAnswer from "./components/QuizSignleAnswer";

export default function App() {

  return (
    <div>
      <QuizDirectAnswer correctAnswer="10" question="Сколько будет 5 + 5" />
      <QuizDirectAnswer correctAnswer="Ростов-на-Дону" question="Столица России" />
      <QuizSingleAnswer question="Кто-будет отчислен?" correctAnswer="Щетько" variants={['Щетько', "Гревцов", "Харламов"]} />
      <QuizMultipleAnswer />
    </div>

  )

}


