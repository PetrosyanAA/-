import { useParams } from "react-router"
import QuizMultipleAnswer from "../components/QuizMultipleAnswer"
import QuizSingleAnswer from "../components/QuizSignleAnswer"
import QuizDirectAnswer from "../components/QuizDirectAnswer"

export default function PlayQuizPage() {

    const { id } = useParams()

    const quizes = JSON.parse(localStorage.getItem('quizes'))

    const [quiz] = quizes.filter(item => item.id == id)

    console.log(quiz)

    return (
        <div>
            <h1 className="text-amber-500 text-center text-2xl font-bold mb-10">{quiz.title}</h1>

            {
                quiz.questions.map(question => (
                    <div>

                        {
                            question.type == 'direct' &&
                            <QuizDirectAnswer correctAnswer={question.correctAnswer} question={question.question} />
                        }
                        {
                            question.type == 'single' &&
                            <QuizSingleAnswer
                                correctAnswer={question.correctAnswer}
                                question={question.question}
                                variants={question.options} />
                        }
                        {
                            question.type == 'multiple' &&
                            <QuizMultipleAnswer
                                correctAnswers={question.correctAnswer}
                                question={question.question}
                                variants={question.options} />
                        }



                    </div>

                ))
            }
        </div>
    )
}
