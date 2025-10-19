import { useEffect, useState } from "react"

export default function QuizMultipleAnswer({ correctAnswers, question, variants }) {


    const [userAnswers, setUserAnswers] = useState([])
    const [result, setResult] = useState('')

    function checkAnswer(answer) {
        if (userAnswers.includes(answer)) {
            setUserAnswers(
                userAnswers.filter(userAnswer => userAnswer !== answer)
            )
        } else {
            setUserAnswers(
                [
                    ...userAnswers,
                    answer
                ]
            )
        }
    }

    useEffect(() => {

        if (correctAnswers.length === userAnswers.length &&
            correctAnswers.every(element => userAnswers.includes(element))
        ) {
            setResult('Верно!')
        } else {
            setResult("Неверно!")
        }

    }, [userAnswers])

    return (
        <div>
            <h3>{question}</h3>

            <div>

                {
                    variants.map(variant => (
                        <label>
                            <input type="checkbox" onChange={() => checkAnswer(variant)} />
                            {variant}
                        </label>
                    ))
                }

            </div>
            <p>{result}</p>
        </div>
    )
}