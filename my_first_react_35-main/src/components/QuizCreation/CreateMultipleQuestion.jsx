import { useEffect, useState } from "react"

export default function CreateMultipleQuestion({ question, editQuestion }) {

    function editOption(value, index) {
        const options = question.options
        options[index] = value

        editQuestion(question.id, options, 'options')
    }

    const [checkedAnswers, setCheckedAnswers] = useState([])

    function checkAnswer(answer) {
        if (checkedAnswers.includes(answer)) {
            setCheckedAnswers(
                checkedAnswers.filter(userAnswer => userAnswer !== answer)
            )
        } else {
            setCheckedAnswers(
                [
                    ...checkedAnswers,
                    answer
                ]
            )
        }

        // editQuestion(question.id, checkedAnswers, 'correctAnswer')

    }

    useEffect(() => {
        editQuestion(question.id, checkedAnswers, 'correctAnswer')
    }, [checkedAnswers])

    return (
        <div>

            <label>
                <p>Введите вопрос</p>
                <input value={question.question} onInput={(e) => editQuestion(question.id, e.target.value, 'question')} type="text" placeholder="Вопрос" />
            </label>
            <div className="flex flex-col gap-y-2">
                {
                    question.options.map((option, index) => (
                        <div className="flex gap-x-3">
                            <input className="bg-blue-500 p-1" type="text" value={option} onInput={(e) => editOption(e.target.value, index)} placeholder={`Вариант ${index + 1}`} />
                            <label className="flex gap-x-2">
                                <input type="checkbox" onChange={() => checkAnswer(option)} />
                                <p>Правильный ответ</p>
                            </label>
                        </div>
                    ))
                }
            </div>

            <div>
                <p>Правильные ответы</p>
                <ul>
                    {
                        typeof question.correctAnswer === 'object' &&
                        question.correctAnswer.map(answer => (
                            <li>{answer}</li>
                        ))
                    }
                </ul>

            </div>

            <div>
                <button onClick={() => editQuestion(question.id, [...question.options, ''], 'options')}>Добавить вариант ответа</button>
            </div>



        </div>
    )
}
