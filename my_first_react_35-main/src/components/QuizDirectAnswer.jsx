import { useEffect, useState } from "react"
export default function QuizDirectAnswer({ correctAnswer, question }) {

    const [userAnswer, setUserAnswer] = useState('')
    const [result, setResult] = useState('')

    useEffect(() => {
        if (userAnswer == correctAnswer) {
            setResult('Верно!')
        } else {
            setResult('Неверно!')
        }
    }, [userAnswer])

    return (
        <div>
            <h3>{question}</h3>
            <input value={userAnswer} onInput={(e) => setUserAnswer(e.target.value)} type="text" placeholder="Введите ответ" />
            <p>{result}</p>
        </div>
    )

}